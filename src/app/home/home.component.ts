import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  images = [
    {path: "assets/images/Fotos04.jpg"},
    {path: "assets/images/Fotos01.jpg"},
    {path: "assets/images/Fotos06.jpg"},
    {path: "assets/images/Fotos03.jpg"},
    {path: "assets/images/Fotos02.jpg"},
    {path: "assets/images/Fotos08.jpg"},
    {path: "assets/images/Fotos05.jpg"},
    {path: "assets/images/Fotos09.jpg"},
  ]
  constructor() { }

  ngOnInit() {
  }

}

