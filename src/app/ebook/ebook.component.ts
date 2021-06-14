import { Component, OnInit, Input } from '@angular/core';
import axios from 'axios'



@Component({
  selector: 'app-ebook',
  templateUrl: './ebook.component.html',
  styleUrls: ['./ebook.component.css']
})
export class EbookComponent  { 
  submitted = false;
  nome;
  email;
  tecnicaBasica;
  tecnicaIntermediaria;
  tecnicaAvancada;
  dicasEmacetes;
  acabamentos;
  tutorialDeBolsas;
  tutorialDeAcessorios;
  tutorialDeRoupas;
  data;

onPost(){
  
  console.log("success")
  console.log(this.nome)
  console.log(this.email)
  console.log(this.tecnicaBasica)

  this.data = {
   nome: this.nome,
   email: this.email,
   tecnicaBasica: this.tecnicaBasica,
   tecnicaIntermediaria: this.tecnicaIntermediaria,
   tecnicaAvancada: this.tecnicaAvancada,
   dicasEmacetes: this.dicasEmacetes,
   acabamentos: this.acabamentos,
   tutorialDeBolsas: this.tutorialDeBolsas,
   tutorialDeAcessorios: this.tutorialDeAcessorios,
   tutorialDeRoupas: this.tutorialDeRoupas,
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
