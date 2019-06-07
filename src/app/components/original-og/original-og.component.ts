import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/Services/firebase.service';


@Component({
// tslint:disable-next-line: component-selector
  selector: 'original-og',
  templateUrl: './original-og.component.html',
  styleUrls: ['./original-og.component.css']
})
export class OriginalOGComponent implements OnInit {

  trays;

  constructor(private fb: FirebaseService) { }

  ngOnInit() {
    this.fb.getOriginalTrays().subscribe( trayData => {
      this.trays = trayData;
    });
  }
}
