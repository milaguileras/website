import { Component, OnInit, Input } from '@angular/core';
import { Lead } from '../lead';
import { EnrollmentService } from '../enrollment.service'




@Component({
  selector: 'app-ebook',
  templateUrl: './ebook.component.html',
  styleUrls: ['./ebook.component.css']
})
export class EbookComponent  {
  submitted = false;
  leadModel = new Lead('', '', false, false, false, false, false,false,false,false,false);

  constructor(private _enrollmentService: EnrollmentService){}

onSubmit(){
  this.submitted = true
  this._enrollmentService.enroll(this.leadModel).subscribe(
    data => console.log("Success!", data),
    error => console.error("Error!", error)
  )

}  

}
