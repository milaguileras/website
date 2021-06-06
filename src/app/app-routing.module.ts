import { NgModule, OnInit, Input } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EbookComponent } from './ebook/ebook.component'
import { AboutMeComponent } from './about-me/about-me.component';


const routes: Routes = [
  { path:'inicio', component: HomeComponent },
  { path:'ebook', component: EbookComponent },
  { path:'sobre', component: AboutMeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
