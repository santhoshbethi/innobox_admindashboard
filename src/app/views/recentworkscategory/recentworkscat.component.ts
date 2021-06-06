


import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "../../services/api.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "recentworkscat.component.html",
})
export class recentWorkcatComponent {
  rows: any;
  columns: any;
  constructor(public api: ApiService, private router: Router) {}
  ngOnInit() {
    this.getRecentworkCat();
    this.columns = [
      {
        title: "ID",
        field: "ID",
      },
      {
        title: "Name",
        field: "name",
      },
      {
        title: "Action",
        field: "action",
      },
      
    ];
  }
  getRecentworkCat() {
    this.api.getRecentworkCat().subscribe((response) => {
      let res = JSON.parse(JSON.stringify(response));
      console.log(res);
      if (res.message) {
        this.rows = res.message;
      } else {
        console.log("errror", res);
      }
    });
  }

  addrecentworkcat() {
    console.log("hello");

    this.router.navigate(["add-recentworkcat"]);
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
    
    
       this.api.updateRctcat({id:items.ID,status:status}).subscribe(data=> {
    console.log(data);
    
       },
       error =>{
        console.log("error");
       })
    
      }
}