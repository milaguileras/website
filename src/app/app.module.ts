import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule, MatButtonModule, MatIconModule } from '@angular/material';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { EbookComponent } from './ebook/ebook.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//import {IvyCarouselModule} from 'angular-responsive-carousel';
import { AboutMeComponent } from './about-me/about-me.component';
import { YoutubeComponent } from './youtube/youtube.component';
import { ContactComponent } from './contact/contact.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    EbookComponent,
    AboutMeComponent,
    YoutubeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    //IvyCarouselModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
