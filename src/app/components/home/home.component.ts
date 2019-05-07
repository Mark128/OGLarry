import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  companyName;
  companySlogan;
  companyDescription;

  constructor() { 
    this.companyName = companyInfo.companyName;
    this.companySlogan = companyInfo.companySlogan;
    this.companyDescription = companyInfo.companyDescription;
  }

  ngOnInit() {
  }

}

const companyInfo = {
  'companyName' : 'OGLarry Designs',
  'companySlogan' : 'The charcuterie board of dope',
  'companyDescription': `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut augue sit amet turpis venenatis luctus in vel eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed a suscipit tellus. Proin accumsan bibendum nibh. Suspendisse sodales felis eget odio rhoncus consectetur. Aliquam augue odio, fermentum vitae ex sit amet, dignissim tempus sem. Donec non dictum sapien. Cras mollis mollis mi non cursus. Donec justo arcu, tincidunt quis dolor nec, consequat iaculis massa. Pellentesque nisi dolor, suscipit nec placerat viverra, ullamcorper ac ipsum. Sed venenatis nulla in nisi suscipit viverra. Duis id lacus elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper est vitae varius posuere. Duis sed venenatis nibh, a dignissim lacus. Aenean fermentum tincidunt purus ac egestas.`
}

