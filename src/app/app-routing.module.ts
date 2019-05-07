import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OriginalOGComponent } from './components/original-og/original-og.component';
import { MiniOGComponent } from './components/mini-og/mini-og.component';
import { AshtraysComponent } from './components/ashtrays/ashtrays.component';
import { CustomComponent } from './components/custom/custom.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: 'OGLarryDesigns', component: HomeComponent},
  {path: 'OriginalOG', component: OriginalOGComponent},
  {path: 'MiniOG', component: MiniOGComponent},
  {path: 'OGAshtrays', component: AshtraysComponent},
  {path: 'CustomOG', component: CustomComponent}, 
  {path: 'Contact', component: ContactComponent},
  {path: '', redirectTo: "/OGLarryDesigns", pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
