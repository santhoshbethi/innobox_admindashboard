import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "../../../services/api.service";

@Component({
  selector: "app-topimages",
  templateUrl: "topimages.component.html",
})
export class topImagesComponent {

  rows: any;
  columns: any;
  flag: any = true;
  constructor(public api: ApiService, private router: Router) { }
  ngOnInit() {
    this.getTopImages();
    this.columns = [
      {
        title: "Name",
        field: "title",
      },
      {
        title: "Text",
        field: "text",
      },

      {
        title: "Action",
        field: "action",
      },
    ];
  }
  getTopImages() {
    this.api.getTopImages().subscribe((response) => {
      let res = JSON.parse(JSON.stringify(response));

      if (res.message) {
        this.rows = res.message;
      } else {
        console.log("errror", res);
      }
    });
  }

  updateTopImages(data: any) {
    this.router.navigate(['addtopimages']);
    sessionStorage.setItem('data', JSON.stringify(data));
    // sessionStorage.setItem('isEditClicked', 'true');
  }

  addTopImages() {
    sessionStorage.removeItem('id');
    this.router.navigate(["addtopimages"]);
    // sessionStorage.setItem('isEditClicked', 'true');

  }
  updateStatus(items: any, event) {
    let status: number;
    if (event.checked == true) {
      status = 1;
    }
    else {
      status = 0;
    }


    this.api.updateTopImages({ id: items.ID, status: status }).subscribe(data => { },
      error => {
        console.log("error");
      })

  }
}
