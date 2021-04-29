import { NgModule, OnInit, Input } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EbookComponent } from './ebook/ebook.component'


const routes: Routes = [
  { path:'inicio', component: HomeComponent },
  { path: 'ebook', component: EbookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
