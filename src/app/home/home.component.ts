import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  images = [
    {path: "assets/images/azul.JPG"}, 
    {path: "assets/images/branco_noiva.png"},
    {path: "assets/images/marrom.png"},
    {path: "assets/images/rosa_vermelho.JPG"},
    {path: "assets/images/vermelho_longo.JPG"},
    {path: "assets/images/vermelho_manga_ombro.png"},
    {path: "assets/images/vermelho.JPG"},
  ]
  constructor() { }

  ngOnInit() {
  }

}
