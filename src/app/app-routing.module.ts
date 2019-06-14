import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OriginalOGComponent } from './components/original-og/original-og.component';
import { MiniOGComponent } from './components/mini-og/mini-og.component';
import { AshtraysComponent } from './components/ashtrays/ashtrays.component';
import { CustomComponent } from './components/custom/custom.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { TrayDetailComponent } from './components/tray-detail/tray-detail.component';
import { OneOffComponent } from './components/oneOff/oneOff.component';
import { SendemailComponent } from './components/sendemail/sendemail.component';
import { CanDeactivateGuard } from './can-deactivate.guard';
import { TrayDetailResolverService } from './Services/tray-detail-resolver.service';
import { TrayListResolverService } from './Services/tray-list-resolver.service';
import { PaymentSuccessComponent } from './components/payment-success/payment-success.component';


const routes: Routes = [
  {path: 'OGLarryDesigns', component: HomeComponent},
  {path: 'OriginalOG', component: OriginalOGComponent, resolve: {trays: TrayListResolverService}},
  {path: 'MiniOG', component: MiniOGComponent, resolve: {trays: TrayListResolverService}},
  {path: 'OGAshtrays', component: AshtraysComponent, resolve: {trays: TrayListResolverService}},
  {path: 'CustomOG', component: CustomComponent, resolve: {trays: TrayListResolverService}},
  {path: 'CustomContact', component: ContactComponent, pathMatch: 'full', canDeactivate: [CanDeactivateGuard]},
  {path: 'ContactOGLarry', component: SendemailComponent, pathMatch: 'full', canDeactivate: [CanDeactivateGuard]},
  {path: '1OFF', component: OneOffComponent, resolve: {trays: TrayListResolverService}},
  {path: 'TrayDetail/:name', component: TrayDetailComponent, resolve: {tray: TrayDetailResolverService}},
  {path: 'PaymentConfirmation', component: PaymentSuccessComponent},
  {path: '', redirectTo: '/OGLarryDesigns', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
