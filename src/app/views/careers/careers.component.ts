import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "../../services/api.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "careers.component.html",
})
export class CareerComponent {
  rows: any;
  columns: any;
  constructor(public api: ApiService, private router: Router) {}
  ngOnInit() {
    this.getCareer();
    this.columns = [
      {
        title: "Job Title",
        field: "jobTitle",
      },
      {
        title: "Location",
        field: "locationCountry",
      },
      {
        title: "Open Position",
        field: "opens",
      },
      {
        title: "Experience",
        field: "experience",
      },
    
      {
        title: "Action",
        field: "action",
      },
    ];
  }
  getCareer() {
    this.api.getCareers().subscribe((response) => {
      let res = JSON.parse(JSON.stringify(response));
      console.log(res);
      if (res.message) {
        this.rows = res.message;
      } else {
        console.log("errror", res);
      }
    });
  }

  addcareer() {
   

    this.router.navigate(["add-career"]);
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


   this.api.updateCareer({id:items.ID,status:status}).subscribe(data=> {
console.log(data);

   },
   error =>{
    console.log("error");
   })

  }
}
