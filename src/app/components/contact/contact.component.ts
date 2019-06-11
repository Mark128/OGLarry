import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FileUpload } from 'src/app/data/FileUpload';
import { FirebaseService } from 'src/app/Services/firebase.service';

@Component({
// tslint:disable-next-line: component-selector
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  // Form Variables
  contactForm;
  isTextChecked = false;
  isLogoChecked = false;
  woodTypes = [
    'oak',
    'spruce',
    'olive wood',
    'birch'
  ];

  // File Upload
  selectedFiles: FileList;
  currentFileUpload: FileUpload;
  progress: { percentage: number } = { percentage: 0 };


  constructor(private fb: FormBuilder, private firebase: FirebaseService) { }

  ngOnInit() {
    this.contactForm = this.fb.group({
      name:  ['', Validators.required],
      email: ['', Validators.required],
      phone: [''],
      woodType: [''],
      trayTextRequested: [false],
      trayText: ['', Validators.required],
      trayLogoRequested: [false],
      trayLogo: ['']
    });
  }

  selectFile(event) {
    const file = event.target.files.item(0);

    if (file.type.match('image.*')) {
      this.selectedFiles = event.target.files;
    } else {
      alert('invalid format!');
    }
  }

  upload() {
    const file = this.selectedFiles.item(0);
    this.selectedFiles = undefined;

    this.currentFileUpload = new FileUpload(file);
    this.firebase.pushFileToStorage(this.currentFileUpload, this.progress);
  }

  onSubmit(contactDetails) {

    contactDetails.trayLogoRequested = this.isLogoChecked;
    contactDetails.trayTextRequested = this.isTextChecked;

    if (this.isLogoChecked && this.firebase.logoURL) {
      contactDetails.trayLogo = this.firebase.logoURL;
    }

    this.firebase.addCustomTrayRequest(contactDetails);
  }

}
