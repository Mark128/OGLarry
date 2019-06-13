import { Injectable } from '@angular/core';
import {
  AngularFirestoreCollection,
  AngularFirestoreDocument,
  AngularFirestore
} from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { ITray } from '../data/tray';
import { AngularFireDatabase } from '@angular/fire/database';
import 'firebase/storage';
import { FileUpload } from '../data/FileUpload';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  }),
  observe: 'response' as 'body'
};

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  // Navigation Info
  navigationLinksCollection: AngularFirestoreCollection<string>;
  navigationLinks: Observable<string[]>;

  // Company Info
  companyInfoCollection: AngularFirestoreCollection<string>;
  companyInfo: Observable<string[]>;

  // Original Trays
  originalTraysCollection: AngularFirestoreCollection<ITray>;
  originalTrays: Observable<ITray[]>;
  originalTray: Observable<ITray[]>;
  originalTrayDoc: AngularFirestoreDocument<ITray>;

  // Mini Trays
  miniTraysCollection: AngularFirestoreCollection<ITray>;
  miniTrays: Observable<ITray[]>;
  miniTray: Observable<ITray[]>;
  miniTrayDoc: Observable<ITray[]>;

  // Ashtrays
  ashtraysCollection: AngularFirestoreCollection<ITray>;
  ashtrays: Observable<ITray[]>;
  ashtray: Observable<ITray[]>;
  ashtrayDoc: Observable<ITray[]>;

  // Custom Trays
  customTraysCollection: AngularFirestoreCollection<ITray>;
  customTrays: Observable<ITray[]>;
  customTray: Observable<ITray[]>;
  customTrayDoc: Observable<ITray[]>;

  // 1Offs
  oneOffsCollection: AngularFirestoreCollection<ITray>;
  oneOffs: Observable<ITray[]>;
  oneOff: Observable<ITray[]>;
  oneOffDoc: Observable<ITray[]>;

  // Wood Types
  woodTypesCollection: AngularFirestoreCollection<any>;
  woodTypes: Observable<any>;

  // Image Links
  imageLinksCollection: AngularFirestoreCollection<any>;
  imageLinks: Observable<any>;

  // PayPal
  payPalCollection: AngularFirestoreCollection<any>;
  payPal: Observable<any>;

  // File Uploads
  private basePath = '/CustomLogoRequests';
  public logoURL;

  snapshot: any;

  constructor(private afs: AngularFirestore, private db: AngularFireDatabase, private http: HttpClient) {}

  // Navigation Info
  getNavigationInfo() {
    this.navigationLinksCollection = this.afs.collection('NavigationLinks');
    this.navigationLinks = this.navigationLinksCollection.valueChanges();
    return this.navigationLinks;
  }

  // Company Info
  getCompanyInfo() {
    this.companyInfoCollection = this.afs.collection('CompanyInfo');
    this.companyInfo = this.companyInfoCollection.valueChanges();
    return this.companyInfo;
  }

  // Original Trays
  getOriginalTrays() {
    this.originalTraysCollection = this.afs.collection('OGOriginals');
    this.originalTrays = this.originalTraysCollection.valueChanges();
    return this.originalTrays;
  }

  getOriginalTray(trayName) {
    this.originalTraysCollection = this.afs.collection('OGOriginals', ref => {
      return ref.where('name', '==', trayName);
    });

    return this.originalTraysCollection.snapshotChanges();
  }

  // Mini Trays
  getMiniTrays() {
    this.miniTraysCollection = this.afs.collection('OGOMinis');
    this.miniTrays = this.miniTraysCollection.valueChanges();
    return this.miniTrays;
  }

  getMiniTray(trayName) {
    this.miniTraysCollection = this.afs.collection('OGOMinis', ref => {
      return ref.where('name', '==', trayName);
    });

    return this.miniTraysCollection.snapshotChanges();
  }

  // Ashtrays
  getAshtrays() {
    this.ashtraysCollection = this.afs.collection('OGAshtrays');
    this.ashtrays = this.ashtraysCollection.valueChanges();
    return this.ashtrays;
  }

  getAshtray(trayName) {
    this.ashtraysCollection = this.afs.collection('OGAshtrays', ref => {
      return ref.where('name', '==', trayName);
    });

    return this.ashtraysCollection.snapshotChanges();
  }

  // Custom Trays
  getCustomTrays() {
    this.customTraysCollection = this.afs.collection('OGCustom');
    this.customTrays = this.customTraysCollection.valueChanges();
    return this.customTrays;
  }

  getCustomTray(trayName) {
    this.customTraysCollection = this.afs.collection('OGCustom', ref => {
      return ref.where('name', '==', trayName);
    });

    return this.customTraysCollection.snapshotChanges();
  }

  addCustomTrayRequest(requestDetails) {
    this.afs
      .collection('CustomRequests')
      .add(requestDetails)
      .then(docRef => {
        console.log('Document written');
      })
      .catch(error => {
        console.error('Error adding document: ', error);
      });
  }

  // 1Offs
  getOneOffs() {
    this.oneOffsCollection = this.afs.collection('OneOffs');
    this.oneOffs = this.oneOffsCollection.valueChanges();
    return this.oneOffs;
  }

  getOneOff(trayName) {
    this.oneOffsCollection = this.afs.collection('OneOffs', ref => {
      return ref.where('name', '==', trayName);
    });

    return this.oneOffsCollection.snapshotChanges();
  }

  // Wood Types
  getWoodTypes() {
    this.woodTypesCollection = this.afs.collection('WoodTypes');
    this.woodTypes = this.woodTypesCollection.valueChanges();
    return this.woodTypes;
  }

  // Image Links
  getImageLinks() {
    this.imageLinksCollection = this.afs.collection('ImageLinks');
    this.imageLinks = this.imageLinksCollection.valueChanges();
    return this.imageLinks;
  }

  // PayPal
  getPayPalConfigs() {
    this.payPalCollection = this.afs.collection('PayPal');
    this.payPal = this.payPalCollection.valueChanges();
    return this.payPal;
  }

  // File Upload
  pushFileToStorage(fileUpload: FileUpload, progress: { percentage: number }) {
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef
      .child(`${this.basePath}/${fileUpload.file.name}`)
      .put(fileUpload.file);

    uploadTask.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      snapshot => {
        // in progress
        const snap = snapshot as firebase.storage.UploadTaskSnapshot;
        progress.percentage = Math.round(
          (snap.bytesTransferred / snap.totalBytes) * 100
        );
      },
      error => {
        // fail
        console.log(error);
      },
      () => {
        // success
        uploadTask.snapshot.ref.getDownloadURL().then(url => {
          fileUpload.url = url;
          this.logoURL = fileUpload.url;
        });

        fileUpload.name = fileUpload.file.name;
        this.saveFileData(fileUpload);
      }
    );
  }

  private saveFileData(fileUpload: FileUpload) {
    this.db.list(`${this.basePath}/`).push(fileUpload);
  }

  // Emailer
  sendMail(emailInput) {

    const url = 'https://us-central1-oglarry.cloudfunctions.net/httpEmail';
    const emailParams = new HttpParams();
    const emailHeaders = new HttpHeaders();
    emailHeaders.append('Content-Type', 'application/json');
    emailHeaders.append('Access-Control-Allow-Origin', '*');

    console.log(emailInput.value);

    emailParams.set('to', 'm_antoniadis@live.com');
    emailParams.set('from', emailInput.value.email);
    emailParams.set('subject', emailInput.value.subject);
    emailParams.set('text',  emailInput.value.text);
    emailParams.set('html', `
    <html>
      <p>${emailInput.value.text}</p>
    </html>`);

    const body = {
      to: 'm_antoniadis@live.com',
      from: emailInput.value.email, /** replace 'example@gmail.com' with a working email address, I simply sent an email to myself. */
      subject: emailInput.value.subject,
      text: emailInput.value.text,
      html: `
      <html>
        <p>${emailInput.value.text}</p>
      </html>`
    };

    console.log(emailParams.getAll);

    return this.http.post(url, body, {
        headers: emailHeaders,
        params: emailParams
      })
      .toPromise()
      .then(res => {
        console.log('sent');
      })
      .catch(err => {
        console.log(err);
      });
  }
}
