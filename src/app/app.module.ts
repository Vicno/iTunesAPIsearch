import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';

// Include the JSONP module for JSONP support
import {HttpClientModule, HttpClientJsonpModule} from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SongsComponent } from './songs/songs.component';
import { JsonService } from './shared/json.service'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    SongsComponent,
    JsonService,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    SongsComponent,
    JsonService
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
