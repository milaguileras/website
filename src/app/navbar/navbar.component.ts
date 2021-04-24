import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  toHome(){
    document.getElementById("home").scrollIntoView({behavior:"smooth"});
  }
  toEbook(){
    document.getElementById("ebook").scrollIntoView({behavior:"smooth"});

  }

}
