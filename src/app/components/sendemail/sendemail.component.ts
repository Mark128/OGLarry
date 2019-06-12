import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/Services/firebase.service';
import { Router } from '@angular/router';


const httpOptions = {
    headers:  new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'})
};

@Component({
// tslint:disable-next-line: component-selector
  selector: 'sendemail',
  templateUrl: './sendemail.component.html',
  styleUrls: ['./sendemail.component.scss']
})
export class SendemailComponent implements OnInit {

  contactForm;

  constructor(private fbs: FirebaseService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.createForm();
  }

  sendEmail() {
    this.fbs.sendMail(this.contactForm);
  }

  createForm() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required]],
      text: ['', [Validators.required]]
    });
  }

  cancel() {
    this.router.navigate(['/OGLarryDesigns']);
  }

}
