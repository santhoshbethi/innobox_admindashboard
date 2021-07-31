import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "../../services/api.service";

@Component({
  selector: "app-testimonials",
  templateUrl: "testimonials.component.html",
})
export class testimonialsComponent {
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
        title: "Name",
        field: "customerName",
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
    this.api.getTestimonials().subscribe((response) => {
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


    this.router.navigate(["addtestimonials"]);
  }

  // highlights(id){
   

  //   this.router.navigate(["add-services",id]);
  // }

  editServices(data){
    sessionStorage.setItem('data', JSON.stringify(data));
    this.router.navigate(["addtestimonials"]);

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
    
    
       this.api.updateTestimonials({id:items.ID,status:status}).subscribe(data=> {
    console.log(data);
    
       },
       error =>{
        console.log("error");
       })
    
      }

 
}
