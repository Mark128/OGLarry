import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/Services/firebase.service';


@Component({
// tslint:disable-next-line: component-selector
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  companyInfo;

  constructor(private fb: FirebaseService) {}

  ngOnInit() {
    this.fb.getCompanyInfo().subscribe( info => {
      this.companyInfo = info[0];
    });
  }
}


