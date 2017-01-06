import { Component, OnInit } from '@angular/core';
import { CreateServiceService } from './create-service.service'; 

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html' 
})
export class CreateComponent implements OnInit {
	  
  constructor(public _post:CreateServiceService) { }

  ngOnInit() {

  }
submitForm(form: any){
	     this._post.post_data(form).subscribe(data => console.log(data),Error);    
  }
  
}

