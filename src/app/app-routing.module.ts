import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmiComponent } from './ami/ami.component';
import { HomeComponent } from './home/home.component';
import { QComponent } from './q/q.component';
import { SarcasmeComponent } from './sarcasme/sarcasme.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path : "home" , component : HomeComponent},
  {path : "QA" , component : QComponent},
  {path : "ami" , component : AmiComponent},
  {path : "sarcasm" , component : SarcasmeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
