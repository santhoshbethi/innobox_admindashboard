

 import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ApiService } from "../../services/api.service";

@Component({
  selector: 'app-addservice',
  templateUrl: 'addservice.component.html'
})
export class addServicesComponent implements OnInit {
  serviceForm: FormGroup;
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

  ngOnInit(): void {}
  serviceData() {
    alert("here");
    this.api.addService(this.serviceForm.value).subscribe((response: any) => {
      
      this.router.navigate(["services"]);
    }, error => {
console.log("error");
    });
  }
}