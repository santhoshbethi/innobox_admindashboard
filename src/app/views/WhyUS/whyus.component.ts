import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "../../services/api.service";


@Component({
  selector: "app-whyus",
  templateUrl: "whyus.component.html",
})
export class whyusComponent {
  rows: any;
  columns: any;
  constructor(public api: ApiService, private router: Router) {}
  ngOnInit() {
    this.getService();
    this.columns = [
      {
        title: "S No",
        field: "ID",
      },
      {
        title: "Title",
        field: "title",
      },
      {
        title: "Category",
        field: "category",
      },
    
      {
        title: "Content",
        field: "content",
      }
     
    ];
  }
  getService() {
    this.api.getwhyus().subscribe((response) => {
      let res = JSON.parse(JSON.stringify(response));
      console.log(res);
      if (res.message) {
        this.rows = res.message;
      } else {
        console.log("errror", res);
      }
    });
  }

  addservices() {


    this.router.navigate(["addwhyus"]);
  }


  editServices(data){
    sessionStorage.setItem('data', JSON.stringify(data));
    this.router.navigate(["addwhyus"]);

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
    
    
       this.api.updatewhyus({id:items.ID,status:status}).subscribe(data=> {
    console.log(data);
    
       },
       error =>{
        console.log("error");
       })
    
      }

 
}
