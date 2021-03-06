import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/Services/firebase.service';

@Component({
  selector: 'mini-og',
  templateUrl: './mini-og.component.html',
  styleUrls: ['./mini-og.component.css']
})
export class MiniOGComponent implements OnInit {

  trays;

  constructor(private fb: FirebaseService) { }

  ngOnInit() {
    this.fb.getMiniTrays().subscribe( trayData => {
      this.trays = trayData;
    });
  }

}
