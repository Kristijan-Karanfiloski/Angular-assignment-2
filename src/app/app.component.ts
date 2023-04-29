import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:''
  disabled:boolean=true



  resetButton(){
    this.name=''
    this.disabled=true
  }




}
