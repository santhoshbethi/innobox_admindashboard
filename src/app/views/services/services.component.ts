import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "../../services/api.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "services.component.html",
})
export class ServicesComponent {
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
        title: "Tittle",
        field: "title",
      }
     
    ];
  }
  getService() {
    this.api.getService().subscribe((response) => {
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
    console.log("hello");

    this.router.navigate(["add-services"]);
  }

  // highlights(id){
   

  //   this.router.navigate(["add-services",id]);
  // }

}
