import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/Services/firebase.service';

@Component({
// tslint:disable-next-line: component-selector
  selector: 'one-off',
  templateUrl: './oneOff.component.html',
  styleUrls: ['./oneOff.component.css']
})
export class OneOffComponent implements OnInit {

  trays;

  constructor(private fb: FirebaseService) { }

  ngOnInit() {
    this.fb.getOneOffs().subscribe( trayData => {
      this.trays = trayData;
    });
  }

}
