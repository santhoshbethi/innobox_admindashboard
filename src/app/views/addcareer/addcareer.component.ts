import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ApiService } from "../../services/api.service";

@Component({
  selector: "app-addcareer",
  templateUrl: "./addcareer.component.html",
})
export class AddcareerComponent implements OnInit {
  careerForm: FormGroup;
  constructor(
    private _fb: FormBuilder,
    public api: ApiService,
    public router: Router
  ) {
    this.careerForm = this._fb.group({
      title: ["", Validators.required],
      experience: ["", Validators.required],
      location: ["", Validators.required],
      opens: ["", Validators.required],
      description: ["", Validators.required],

      status: ["", Validators.required],
    });
  }

  ngOnInit(): void {}
  addData() {
    this.api.addCareer(this.careerForm.value).subscribe((response: any) => {
      
      this.router.navigate(["careers"]);
    }, error => {
console.log("error");
    });
  }
}
