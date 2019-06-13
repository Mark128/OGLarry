import { Injectable} from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from './firebase.service';


@Injectable({
  providedIn: 'root'
})

export class PaymentService  {

  addScript = false;
  payPalLoad = true;
  finalAmount;

  payPalConfig = {
    env: 'sandbox',
    client: {
      sandbox: 'AWnXmHI-yDFFMJzvqOtBrvHmVhUVCjUiqlH2n03nh2zErDStZ7DSoDIn6rElk82UPllAzb6ChYeNzCn-',
      production: 'Adcd_MJsIc4nO-AnrA610UBG_fld3sFrWOw4_DjRrt-Ixyo3F8wGhUojVrPCAW5gXU1Sh-6kBgDVrK3E'
    },
    style: {
      size: 'responsive',
      color: 'gold',
      shape: 'pill',
      label: 'checkout',
      tagline: 'false',
      width: '100%'
    },
    commit: true,
    payment: (data, actions) => {
      return actions.payment.create({
        payment: {
          transactions: [
            { amount: {total: this.finalAmount, currency: 'CAD'}}
          ]
        }
      });
    },
    onAuthorize: (data, actions) => {
      return actions.payment.execute().then((payment) => {
        this.router.navigate(['/OGLarryDesigns']);
      });
    },

    onCancel: (data, actions) => {
      this.router.navigate(['/OGLarryDesigns']);
    }
  };

  constructor(private router: Router, private fb: FirebaseService) {
  }

  setPaymentAmount(price) {
    this.finalAmount = price;
  }

  addPayPalScript() {
    this.addScript = true;
    return new Promise((resolve, reject) => {
      const scriptTagElement = document.createElement('script');
      scriptTagElement.src = 'https://paypalobjects.com/api/checkout.js';
      scriptTagElement.onload = resolve;
      document.body.appendChild(scriptTagElement);
    });
  }
}
