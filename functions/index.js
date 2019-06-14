const functions = require('firebase-functions');
const paypal = require('paypal-rest-sdk');

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);


// Mailers
const cors = require('cors')({
  origin: ['http://localhost:4200'], /** replace with the url of your development environment that serves your angular app. */
  methods: ['POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
  preflightContinue: false,
  optionsSuccessStatus: 204
});

const SENDGRID_API_KEY = functions.config().sendgrid.key
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(SENDGRID_API_KEY);


exports.httpEmail = functions.https.onRequest((req, res) => {

  cors(req, res, () => {

    return Promise.resolve()
      .then(() => {
        if (req.method !== 'POST') {
          const error = new Error('Only POST requests are accepted');
          error.code = 405;
          throw error;
        }

        const message = {
          to: req.body.to,
          from: req.body.from,
          subject: req.body.subject,
          text: req.body.text,
          html: req.body.html
        };

        return sgMail.send(message);

      })
      .then((response) => {
        if (response.body) {
          res.send(response.body);
        } else {
          res.end();
        }
      })
      .catch((err) => {
        console.error(err);
        return Promise.reject(err);
      });

  });

});

exports.firestoreEmail = functions.firestore
  .document('CustomRequests/{docID}')
  .onCreate((snap, context) => {

      const item = snap.data();

      const db = admin.firestore();
      const msg = {
        to: 'm_antoniadis@live.com',
        from: 'OGLarry@OGLarryDesigns.com',
        subject:  'New Custom Tray Request',
        html: `<h2> OGLarry, you have a new custom tray request.</h2>
        <div>To view it go to <a href="https://console.firebase.google.com/project/oglarry/overview">OGLarry Console</a></div>
        <div>From there, go to 'Database' -> 'CustomRequests' -> Navigate to the latest one.</div>
        `
    };
      return sgMail.send(msg);

});

// PayPal
//console.log('client secret ' + functions.config().paypal.sandbox_client_secret);
//console.log('client id ' + functions.config().paypal.sandbox_client_id);

const clientID = functions.config().paypal.sandbox_client_id;
const secret1 = functions.config().paypal.client_secret1;
const secret2 = functions.config().paypal.client_secret2;
const secret3 = functions.config().paypal.client_secret3;

let clientSecret = `${secret1}-${secret2}-${secret3}`;


let paylPalConfig = {
  mode: 'sandbox', // sandbox or live
  client_id: clientID, // run: firebase functions:config:set paypal.client_id="yourPaypalClientID"
  client_secret: clientSecret
};

paypal.configure(paylPalConfig);

exports.pay = functions.https.onRequest((req, res) => {
  // 1.Set up a payment information object, Build PayPal payment request
  cors(req, res, () => {
  const payReq = JSON.stringify({
    intent: 'sale',
    payer: {
      payment_method: 'paypal'
    },
    redirect_urls: {
      return_url: `https://us-central1-oglarry.cloudfunctions.net/process`,
      cancel_url: `http://localhost:4200/OGLarryDesigns`
    },
    transactions: [{
      amount: {
        total: req.body.price,
        currency: 'CAD'
      },
      // This is the payment transaction description. Maximum length: 127
      description: req.body.uid, // req.body.id
      // reference_id string .Optional. The merchant-provided ID for the purchase unit. Maximum length: 256.
      // reference_id: req.body.uid,
      custom: req.body.uid,
      // soft_descriptor: req.body.uid
      // "invoice_number": req.body.uid,A
    }]
  });

  // 2.Initialize the payment and redirect the user.
  paypal.payment.create(payReq, (error, payment) => {
      const links = {};
      if (error) {
        console.error(error);
        res.status('500').end();
      } else {
        // Capture HATEOAS links
        payment.links.forEach((linkObj) => {
          links[linkObj.rel] = {
            href: linkObj.href,
            method: linkObj.method
          };
        });
        // If redirect url present, redirect user
        if (links.hasOwnProperty('approval_url')) {
          // REDIRECT USER TO links['approval_url'].href
          console.info(links.approval_url.href);
          // res.json({"approval_url":links.approval_url.href});
          res.status(200).send(JSON.stringify(links.approval_url.href));
        } else {
          console.error('no redirect URI present');
          res.status('500').end();
        }
      }
    });
  });
});

// 3.Complete the payment. Use the payer and payment IDs provided in the query string following the redirect.
exports.process = functions.https.onRequest(async (req, res) => {
  const paymentId = req.query.paymentId;
  const payerId = {
    payer_id: req.query.PayerID
  };
  const r = await paypal.payment.execute(paymentId, payerId, (error, payment) => {
    if (error) {
      console.error(error);
      res.redirect(`http://localhost:4200/OGLarryDesigns`); // replace with your url page error
    } else {
      if (payment.state === 'approved') {
        console.info('payment completed successfully, description: ', payment.transactions[0].description);
        // console.info('req.custom: : ', payment.transactions[0].custom);
        // set paid status to True in RealTime Database
        console.log('success');
        res.redirect(`http://localhost:4200/PaymentConfirmation`); // replace with your url, page success
      } else {
        console.warn('payment.state: not approved ?');
        // replace debug url
       // res.redirect(`https://console.firebase.google.com/project/${process.env.GCLOUD_PROJECT}/functions/logs?search=&severity=DEBUG`);
      }
    }
  });
});



