import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "../../../services/api.service";

@Component({
  selector: "app-whatwedocounter",
  templateUrl: "whatwedocounter.component.html",
})
export class whatwedoCounterComponent {
  rows: any;
  columns: any;
  flag: any = true;
  constructor(public api: ApiService, private router: Router) { }
  ngOnInit() {
    this.getStaticData();
    this.columns = [
      {
        title: "ID",
        field: "ID",
      },
      {
        title: "Title",
        field: "title",
      },
      {
        title: "Count",
        field: "value",
      },
      {
        title: "Action",
        field: "action",
      },

    ];
  }
  getStaticData() {
    this.api.getStaticData().subscribe((response) => {
      let res = JSON.parse(JSON.stringify(response));
      if (res.message) {
        this.rows = res.message;
      } else {
        console.log("errror", res);
      }
    });
  }

  editServices(data) {
    sessionStorage.setItem('data', JSON.stringify(data));
    this.router.navigate(["edit-staticdata"]);

  }

  updateStatus(items: any, event) {

    let status: number;
    if (event.checked == true) {
      status = 1;
    }
    else {
      status = 0;
    }

    this.api.updateStaticData({ id: items.ID, status: status }).subscribe(data => {
    },
      error => {
        console.log("error");
      })

  }
}

