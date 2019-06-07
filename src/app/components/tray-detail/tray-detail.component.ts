import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from 'src/app/Services/firebase.service';


@Component({
// tslint:disable-next-line: component-selector
  selector: 'tray-detail',
  templateUrl: './tray-detail.component.html',
  styleUrls: ['./tray-detail.component.css']
})
export class TrayDetailComponent implements OnInit {

  tray;
  priceLabel = ' Price';

  constructor(private ar: ActivatedRoute, private fb: FirebaseService) { }

  ngOnInit() {
    const name = this.ar.snapshot.params.name;

    this.fb.getOriginalTray(name).subscribe( trayData => {
      this.tray = trayData[0].payload.doc.data();
    });

  }

  purchaseTray(targetID) {

  }

}
