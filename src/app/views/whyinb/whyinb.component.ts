import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "../../services/api.service";

@Component({
  selector: "app-testimonials",
  templateUrl: "whyinb.component.html",
})
export class whyinbComponent {
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
        title: "Comment",
        field: "content",
      },
    
      {
        title: "Action",
        field: "action",
      }
     
    ];
  }
  getService() {
    this.api.getwhyinb().subscribe((response) => {
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


    this.router.navigate(["addwhyinb"]);
  }

  // highlights(id){
   

  //   this.router.navigate(["add-services",id]);
  // }

  editServices(data){
    sessionStorage.setItem('data', JSON.stringify(data));
    this.router.navigate(["addwhyinb"]);

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
    
    
       this.api.updatewhyinb({id:items.ID,status:status}).subscribe(data=> {
    console.log(data);
    
       },
       error =>{
        console.log("error");
       })
    
      }

 
}
