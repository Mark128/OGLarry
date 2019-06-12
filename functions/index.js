const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

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
