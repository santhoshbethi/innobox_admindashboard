import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "../../services/api.service";


@Component({
  selector: "app-aboutus",
  templateUrl: "aboutus.component.html",
})
export class aboutusComponent {
  rows: any;
  columns: any;
  constructor(public api: ApiService, private router: Router) { }
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
        title: "Value",
        field: "value",
      }

    ];
  }
  getService() {
    this.api.getaboutus().subscribe((response) => {
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

    this.router.navigate(["addaboutus"]);
  }


  editServices(data) {
    sessionStorage.setItem('data', JSON.stringify(data));
    this.router.navigate(["addaboutus"]);

  }
  updateStatus(items: any, event) {
    let status: number;
    if (event.checked == true) {
      status = 1;
    }
    else {
      status = 0;
    }


    this.api.updateaboutus({ id: items.ID, status: status, file: null }).subscribe(data => {
      console.log(data);

    },
      error => {
        console.log("error");
      })

  }


}
