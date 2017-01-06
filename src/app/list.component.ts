import { Component, OnInit } from '@angular/core';
import {ListService} from './list.service';

@Component({
  selector: 'app-list1',
  templateUrl: './list.component.html' 
  
})
export class ListComponent implements OnInit {
	sam;
	visible=false;
  constructor(private _listservice:ListService ) {}

  
	get_list(){
		this._listservice.getsample().subscribe(data => {this.sam=data[0];console.log(this.sam[0].id)})
		this.visible=true;
		
	}
	ngOnInit() {

    }

}
