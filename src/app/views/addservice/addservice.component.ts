 import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { isJSDocThisTag } from "typescript";
import { ApiService } from "../../services/api.service";

@Component({
  selector: 'app-addservice',
  templateUrl: './addservice.component.html'
})
export class addServicesComponent implements OnInit {
  serviceForm: FormGroup;
  id: any;
  serviceID: any;
  rows: any;

  constructor(
    private _fb: FormBuilder,
    public api: ApiService,
    public router: Router
  ) {
    this.serviceForm = this._fb.group({
      quicktext: ["", Validators.required],
      shortdescr: ["", Validators.required],
      fulldcr: ["", Validators.required],
      title: ["", Validators.required],
      menuid: ["", Validators.required],
    });
  }

  ngOnInit(): void {
    this.getMenu();
    this.id = sessionStorage.getItem('id');
    if(this.id){
      this.fetchData();
    }
  }

  ngOnDestroy(): void {
    sessionStorage.removeItem('id')
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

  serviceData() {
    if (this.id == null) {
      // const formatData = this.serviceForm.value;
      // formatData.serviceID = this.serviceForm.controls.menuid.value;
      this.api.addService(this.serviceForm.value).subscribe((response: any) => {
        this.router.navigate(["services"]);
      }, error => {
        console.log("error");
      });
    } else {
      const formatData = this.serviceForm.value;
      formatData.id = this.id;
      this.api.addService(formatData).subscribe((response: any) => {
        this.router.navigate(["services"]);
      }, error => {
        console.log("error");
      });
    }
  }

  fetchData() {
    const formatData = this.formatData(this.id);
    this.api.getServicesById(formatData).subscribe((response: any) => {
      console.log(response);
      this.serviceForm.patchValue(response.message[0].maindata[0])
    }, error => {
      console.log("error");
    });
  }

  formatData(serviceID) {
    return {
      "id": serviceID,
    };
  }

}