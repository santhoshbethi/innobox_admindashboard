import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "../../services/api.service";


@Component({
  selector: 'app-dashboard',
  templateUrl: 'rcntwrks.component.html'
})

export class recentWorksComponent {
  rows: any;
  columns: any;
  constructor(public api: ApiService, private router: Router) {}
  ngOnInit() {
    this.getRecentwork();
    this.columns = [
      {
        title: "ID",
        field: "ID",
      },
      {
        title: "category id",
        field: "cat_id",
      },
      {
        title: "home name",
        field: "homename",
      },
      {
        title: "title",
        field: "title",
      },
      {
        title: "Action",
        field: "action",
      },
      
    ];
  }
  getRecentwork() {
    this.api.getRecentwork().subscribe((response) => {
      let res = JSON.parse(JSON.stringify(response));
      console.log(res);
      if (res.message) {
        this.rows = res.message;
      } else {
        console.log("errror", res);
      }
    });
  }

  addrecentworks() {
    console.log("hello");

    this.router.navigate(["add-recentworks"]);
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
    
    
       this.api.updateRctwrk({id:items.ID,status:status,image1:items.image1}).subscribe(data=> {
    console.log(data);
    
       },
       error =>{
        console.log("error");
       })
    
      }

      editRecentWork(id){
        this.router.navigate(["edit-recentworks"]);
        sessionStorage.setItem('id', id);
      }
}
