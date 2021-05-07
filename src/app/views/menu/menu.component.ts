import { Component,OnInit } from '@angular/core';
// import {FormBuilder, Validators} from '@angular/forms'
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-dashboard',
  templateUrl: 'menu.component.html'
})
export class MenuComponent { 
  data 
  constructor(private httpClient: HttpClient){}
  ngOnInit(){
  
    this.httpClient.get("http://localhost:5000/api/v1/menu").subscribe(data =>{
      console.log(data)
      this.data = data
     
    })
  }
  
 }
