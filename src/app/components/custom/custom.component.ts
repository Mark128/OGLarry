import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/Services/firebase.service';
import { Router } from '@angular/router';

@Component({
// tslint:disable-next-line: component-selector
  selector: 'custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit {

  trays;

  constructor(private fb: FirebaseService, private router: Router) { }

  ngOnInit() {
    this.fb.getCustomTrays().subscribe( trayData => {
      this.trays = trayData;
    });
  }

  requestCustomTray() {
    this.router.navigate(['/CustomContact']);
  }
}
