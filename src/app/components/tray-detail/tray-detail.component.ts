import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from 'src/app/Services/firebase.service';
import { ITray } from 'src/app/data/tray';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'tray-detail',
  templateUrl: './tray-detail.component.html',
  styleUrls: ['./tray-detail.component.css']
})
export class TrayDetailComponent implements OnInit {
  tray;
  priceLabel = ' Price';

  constructor(private ar: ActivatedRoute, private fb: FirebaseService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe((data: {tray: ITray}) => {
      this.tray = data.tray;
    });
    /*const urlName = this.ar.snapshot.params.name;
    const nameArray = urlName.split('-', 2);
    const name = nameArray[1];
    const category = nameArray[0];

    switch (category) {
      case 'Original': {
        this.fb.getOriginalTray(name).subscribe(trayData => {
          this.tray = trayData[0].payload.doc.data();
        });
        break;
      }
      case 'Mini': {
        this.fb.getMiniTray(name).subscribe(trayData => {
          this.tray = trayData[0].payload.doc.data();
        });
        break;
      }
      case 'Custom': {
        this.fb.getCustomTray(name).subscribe(trayData => {
          this.tray = trayData[0].payload.doc.data();
        });
        break;
      }
      case 'Ashtray': {
        this.fb.getAshtray(name).subscribe(trayData => {
          this.tray = trayData[0].payload.doc.data();
        });
        break;
      }
      case '1OFF': {
        this.fb.getOneOff(name).subscribe(trayData => {
          this.tray = trayData[0].payload.doc.data();
        });
        break;
      }
    }*/
  }
}
