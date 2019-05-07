import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'image-links',
  templateUrl: './image-links.component.html',
  styleUrls: ['./image-links.component.css']
})
export class ImageLinksComponent implements OnInit {

  images = [
    {src: "../../assets/imgs/tray3.jpg", caption: "Original OG", link: '/OriginalOG'},
    {src: "../../assets/imgs/tray3.jpg", caption: "Mini OG", link: '/OriginalOG'},
    {src: "../../assets/imgs/tray3.jpg", caption: "Custom OG", link: '/OriginalOG'},
    {src: "../../assets/imgs/tray3.jpg", caption: "OG Ashtrays", link: '/OriginalOG'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
