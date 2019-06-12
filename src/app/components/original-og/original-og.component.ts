import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/Services/firebase.service';
import { Router } from '@angular/router';


@Component({
// tslint:disable-next-line: component-selector
  selector: 'original-og',
  templateUrl: './original-og.component.html',
  styleUrls: ['./original-og.component.css']
})
export class OriginalOGComponent implements OnInit {

  trays;

  constructor(private fb: FirebaseService, private router: Router) { }

  ngOnInit() {
    console.log(this.router.url);
    this.fb.getOriginalTrays().subscribe( trayData => {
      this.trays = trayData;
    });
  }
}
