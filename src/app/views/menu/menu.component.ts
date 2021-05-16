// import {FormBuilder, Validators} from '@angular/forms'
import { Component } from "@angular/core";
import { ApiService } from "../../services/api.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "menu.component.html",
})
export class MenuComponent {
  rows: any;
  columns: any;
  constructor(public api: ApiService) {}
  ngOnInit() {
    this.getMenu();
    this.columns = [
      {
        title: "Name",
        field: "itemName",
      },
      {
        title: "Status",
        field: "status",
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
}
