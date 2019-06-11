import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/Services/firebase.service';

@Component({
  selector: 'ashtrays',
  templateUrl: './ashtrays.component.html',
  styleUrls: ['./ashtrays.component.css']
})
export class AshtraysComponent implements OnInit {

  trays;
  constructor(private fb: FirebaseService) { }

  ngOnInit() {
    this.fb.getAshtrays().subscribe( trayData => {
      this.trays = trayData;
    });
  }

}
