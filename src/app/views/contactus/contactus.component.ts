import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "../../services/api.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "contactus.component.html",
})
export class ContactusComponent {
  rows: any;
  columns: any;
  constructor(public api: ApiService, private router: Router) {}
  ngOnInit() {
    this.getContact();
    this.columns = [
      {
        title: "S No",
        field: "ID",
      },
      {
        title: "Name",
        field: "locationName",
      },
      {
        title: "Address",
        field: "locationAddress",
      },
     
    ];
  }
  getContact() {
    this.api.getContact().subscribe((response) => {
      let res = JSON.parse(JSON.stringify(response));
      console.log(res);
      if (res.message) {
        this.rows = res.message;
      } else {
        console.log("errror", res);
      }
    });
  }

  addaddress() {
    console.log("hello");

    this.router.navigate(["addcontactus"]);
  }
}
