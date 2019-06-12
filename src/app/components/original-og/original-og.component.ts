import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/Services/firebase.service';
import { ActivatedRoute } from '@angular/router';


@Component({
// tslint:disable-next-line: component-selector
  selector: 'original-og',
  templateUrl: './original-og.component.html',
  styleUrls: ['./original-og.component.css']
})
export class OriginalOGComponent implements OnInit {

  trays;

  constructor(private fb: FirebaseService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.data.subscribe((data: {trays: any}) => {
      this.trays = data.trays;
    });
  }
}
