import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public edited = true; 
	 shareTitle = "Sharing is caring";
  fbInner = "<img src='./assets/img/custom-facebook.svg'>";
  twitterInner = "<img src='../assets/img/custom-twitter.svg'>";
  pintInner = "<img src='../assets/img/custom-pinterest.svg'>";
  inInner = "<img src='../assets/img/custom-linkedin.svg'>";
  googleInner = "<img src='../assets/img/custom-google-plus.svg'>";
  tumblrInner = "<img src='../assets/img/custom-tumblr.svg'>";
	private textValue ="Inital Text";
	private log: string ='';
   title = {firstName:"suresh",lastName:"AK",phone:"9789670789"};
newMinor(){
	alert("hello I am here");
}
logText(value:string){
	this.log= `Text changed to '${value}'\n`;
}
}

