import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import { MissionlistComponent } from './missionlist/missionlist.component';
import {MissiondetailsComponent} from "./missiondetails/missiondetails.component";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    MissionlistComponent,
    MissiondetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  exports: [
    MissionlistComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
