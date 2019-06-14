import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ITray } from 'src/app/data/tray';
import { PaymentService } from 'src/app/Services/payment.service';
import { FirebaseService } from 'src/app/Services/firebase.service';

declare var paypal;

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'tray-detail',
  templateUrl: './tray-detail.component.html',
  styleUrls: ['./tray-detail.component.css']
})
export class TrayDetailComponent implements OnInit {
  tray;
  priceLabel = ' Price';

  constructor(private route: ActivatedRoute, private payment: PaymentService, private fb: FirebaseService) {}

  ngOnInit() {
    this.route.data.subscribe((data: {tray: ITray}) => {
      this.tray = data.tray;
    });

    this.payment.setPaymentAmount(this.tray.price);
  }

  /*ngAfterViewChecked(): void {
    if (!this.payment.addScript) {
      this.payment.addPayPalScript().then(() => {
        paypal.Button.render(this.payment.payPalConfig, '#PayPalCheckoutButton');
        this.payment.payPalLoad = false;
      });
    }
  }*/

  purchaseTray(tray) {
    this.fb.purchaseTray(tray.price);
  }

}
