import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/Services/firebase.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


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

  canDeactivate(): Observable<boolean> | boolean {

    if (!this.contactForm.dirty) {
      return true;
    }

    const confirm = window.confirm('Are you sure you want to leave?');

    return confirm;
  }

  cancel() {
    this.router.navigate(['/OGLarryDesigns']);
  }

}
