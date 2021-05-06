import { Component, OnInit, Input } from '@angular/core';
import axios from 'axios'

/*SheetDB.read('https://sheetdb.io/api/v1/58f61be4dda40', {}).then(function(result){
  console.log(result);
}, function(error){
  console.log(error);
});*/



@Component({
  selector: 'app-ebook',
  templateUrl: './ebook.component.html',
  styleUrls: ['./ebook.component.css']
})
export class EbookComponent  {
  submitted = false;
  name;
  email;
data;
onPost(){
  this.submitted = true
  console.log("success")
  console.log(this.name)
  console.log(this.email)
  this.data = {
   name: this.name,
   email: this.email
  }
  axios.post('https://sheetdb.io/api/v1/shs6y770cx24r', this.data)
    .then( response => {
        console.log(response.data);
    });
    // Get all data
    // axios.get('https://sheetdb.io/api/v1/shs6y770cx24r')
    // .then( response => {
    //     console.log(response.data);
    // });
  } 
}
