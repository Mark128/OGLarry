import { Component, OnInit } from '@angular/core';

@Component({
// tslint:disable-next-line: component-selector
  selector: 'image-links',
  templateUrl: './image-links.component.html',
  styleUrls: ['./image-links.component.css']
})
export class ImageLinksComponent implements OnInit {

  images = [
    {src: '../../assets/imgs/tray3.jpg', caption: 'Original OG', link: '/OriginalOG'},
    {src: '../../assets/imgs/tray3.jpg', caption: 'Mini OG', link: '/MiniOG'},
    {src: '../../assets/imgs/tray3.jpg', caption: 'Custom OG', link: '/CustomOG'},
    {src: '../../assets/imgs/tray3.jpg', caption: 'OG Ashtrays', link: '/OGAshtrays'},
    {src: '../../assets/imgs/tray3.jpg', caption: '1OFF Designs', link: '/1OFF'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
