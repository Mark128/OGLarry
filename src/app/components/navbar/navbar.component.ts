import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/Services/firebase.service';

@Component({
// tslint:disable-next-line: component-selector
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  size = '2x';
  navigationLinks;

  constructor(private fb: FirebaseService) { }

  ngOnInit() {
    this.fb.getNavigationInfo().subscribe( links => {
      this.navigationLinks = links[0];
    });
  }

}
