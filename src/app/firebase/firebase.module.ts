import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FirestoreSettingsToken} from '@angular/fire/firestore';
import { FirebaseService } from '../Services/firebase.service';


@NgModule({
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule
  ],
  declarations: [],
  providers: [
    FirebaseService,
    { provide: FirestoreSettingsToken, useValue: {} }]
})
export class FirebaseModule { }
