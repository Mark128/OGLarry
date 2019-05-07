import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1};
  slides = [
    {img: "../../assets/imgs/tray1.jpg"},
    {img: "../../assets/imgs/tray2.jpg"},
    {img: "../../assets/imgs/tray3.jpg"},
    {img: "../../assets/imgs/tray4.jpg"},
  ];

  constructor() { }

  ngOnInit() {
  }

}

