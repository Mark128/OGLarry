import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/Services/firebase.service';

@Component({
// tslint:disable-next-line: component-selector
  selector: 'image-links',
  templateUrl: './image-links.component.html',
  styleUrls: ['./image-links.component.css']
})
export class ImageLinksComponent implements OnInit {

  imageLinks;

  constructor(private fb: FirebaseService) { }

  ngOnInit() {
    this.fb.getImageLinks().subscribe( links => {
      this.imageLinks = links[0].ImageLinks;
    });
  }

}
