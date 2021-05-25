import { Component, OnInit, Input } from '@angular/core';
import axios from 'axios'



@Component({
  selector: 'app-ebook',
  templateUrl: './ebook.component.html',
  styleUrls: ['./ebook.component.css']
})
export class EbookComponent  { 
  submitted = false;
  name;
  email;
  tecnicaBasica;
  data;
onPost(){
  
  console.log("success")
  console.log(this.name)
  console.log(this.email)
  console.log(this.tecnicaBasica)
  this.data = {
   name: this.name,
   email: this.email,
   tecnicaBasica: this.tecnicaBasica
  }
  axios.post('https://sheetdb.io/api/v1/shs6y770cx24r', this.data)
    .then( response => {
        console.log(response.data);
        this.submitted = true
    });
    // Get all data
    // axios.get('https://sheetdb.io/api/v1/shs6y770cx24r')
    // .then( response => {
    //     console.log(response.data);
    // });
  } 
}
