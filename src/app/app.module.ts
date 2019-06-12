import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

// Custom Imports
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SlickModule } from 'ngx-slick';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { NavbarComponent } from './components/navbar/navbar.component';
import { OriginalOGComponent } from './components/original-og/original-og.component';
import { MiniOGComponent } from './components/mini-og/mini-og.component';
import { AshtraysComponent } from './components/ashtrays/ashtrays.component';
import { CustomComponent } from './components/custom/custom.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ImageLinksComponent } from './components/image-links/image-links.component';
import { TrayDetailComponent } from './components/tray-detail/tray-detail.component';
import { ProductThumbnailComponent } from './components/product-thumbnail/product-thumbnail.component';
import { FirebaseModule } from './firebase/firebase.module';
import { OneOffComponent } from './components/oneOff/oneOff.component';
import { SendemailComponent } from './components/sendemail/sendemail.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OriginalOGComponent,
    MiniOGComponent,
    AshtraysComponent,
    CustomComponent,
    ContactComponent,
    HomeComponent,
    CarouselComponent,
    ImageLinksComponent,
    TrayDetailComponent,
    ProductThumbnailComponent,
    OneOffComponent,
    SendemailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFontAwesomeModule,
    FirebaseModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    SlickModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
