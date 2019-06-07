import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm;
  isTextChecked = false;
  isLogoChecked = false;

  woodTypes = [
    'oak',
    'spruce',
    'olive wood',
    'birch'
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.contactForm = this.fb.group({
      name:  ['', Validators.required],
      email: ['', Validators.required],
      phone: [''],
      woodType: [''],
      trayText: ['', Validators.required],
      trayLogo: ['']
    });
  }

  onSubmit(contactDetails){
    console.log(contactDetails.name);
  }

}
