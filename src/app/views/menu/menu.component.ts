// import {FormBuilder, Validators} from '@angular/forms'
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "../../services/api.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "menu.component.html",
})
export class MenuComponent {
  rows: any;
  columns: any;
  constructor(public api: ApiService, private router: Router) {}
  ngOnInit() {
    this.getMenu();
    this.columns = [
      {
        title: "ID",
        field: "ID",
      },
      {
        title: "Name",
        field: "itemName",
      },
     
      {
        title: "Action",
        field: "action",
      },
    ];
  }
  getMenu() {
    this.api.getMenu().subscribe((response) => {
      let res = JSON.parse(JSON.stringify(response));
      
      if (res.message) {
        this.rows = res.message;
        
      } else {
        console.log("errror", res);
      }
    });
  }
  updateStatus(items: any,event){
    let status : number;
        if(event.checked)
        {
        status=0;
        }
        else
        {
          status=1;
        }
    
    
       this.api.updateMenus({id:items.ID,status:status}).subscribe(data=> {
    console.log(data);
    
       },
       error =>{
        console.log("error");
       })
    
      }

      addMenu(){
        this.router.navigate(["add-menu"]);
      }
    }
    
