import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "../../../services/api.service";

@Component({
  selector: "app-topimages",
  templateUrl: "topimages.component.html",
})
export class topImagesComponent {

  flag: any = true;
  constructor(public api: ApiService, private router: Router) {}
  ngOnInit() {

  }
 


  addcareer() {
   sessionStorage.removeItem('id');
    this.router.navigate(["add-homeslider"]);
    // sessionStorage.setItem('isEditClicked', 'true');

  }
 
}
