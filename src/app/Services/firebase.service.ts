import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ITray } from '../data/tray';

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

  snapshot: any;

  constructor(private afs: AngularFirestore) { }

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
    console.log('tray name: ' + trayName);
    this.originalTraysCollection = this.afs.collection('OGOriginals', ref => {
      return ref.where('name', '==', trayName);
    });

    return this.originalTraysCollection.snapshotChanges();
  }
}
