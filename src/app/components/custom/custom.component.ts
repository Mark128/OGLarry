import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/Services/firebase.service';

@Component({
  selector: 'custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit {

  trays;

  constructor(private fb: FirebaseService) { }

  ngOnInit() {
    this.fb.getCustomTrays().subscribe( trayData => {
      this.trays = trayData;
    });
  }

}
