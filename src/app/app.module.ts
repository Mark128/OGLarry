import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { NavbarComponent } from './components/navbar/navbar.component';
import { OriginalOGComponent } from './components/original-og/original-og.component';
import { MiniOGComponent } from './components/mini-og/mini-og.component';
import { AshtraysComponent } from './components/ashtrays/ashtrays.component';
import { CustomComponent } from './components/custom/custom.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OriginalOGComponent,
    MiniOGComponent,
    AshtraysComponent,
    CustomComponent,
    ContactComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
