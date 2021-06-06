import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ApiService } from "../../services/api.service";


@Component({
  selector: 'app-dashboard',
  templateUrl: 'rctwrkcatgoryadd.component.html'
})
export class rctwrkcatgoryaddComponent implements OnInit {
  contactForm: FormGroup;
  constructor(
    private _fb: FormBuilder,
    public api: ApiService,
    public router: Router
  ) {
    this.contactForm = this._fb.group({
      name: ["", Validators.required],
      
    });
  }

  ngOnInit(): void {}
  rcntwrkcataddData() {
    this.api.recentworkcataddcat(this.contactForm.value).subscribe((response: any) => {
      
      this.router.navigate(["rctwrkcatgoryadd"]);
    }, error => {
console.log("error");
    });
  }
}