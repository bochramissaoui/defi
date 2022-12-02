import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { QComponent } from './q/q.component';
import { AmiComponent } from './ami/ami.component';
import { SarcasmeComponent } from './sarcasme/sarcasme.component';

@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,
     QComponent,
     AmiComponent,
     SarcasmeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
