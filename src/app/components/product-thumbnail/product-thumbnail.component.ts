import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
// tslint:disable-next-line: component-selector
  selector: 'product-thumbnail',
  templateUrl: './product-thumbnail.component.html',
  styleUrls: ['./product-thumbnail.component.css']
})
export class ProductThumbnailComponent implements OnInit {

  @Input() tray;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToDetailPage() {
    this.router.navigate(['/TrayDetail', `${this.tray.category}-${this.tray.name}`]);
  }
}
