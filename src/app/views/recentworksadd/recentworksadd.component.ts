import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ApiService } from "../../services/api.service";


@Component({
  selector: 'app-dashboard',
  templateUrl: 'recentworksadd.component.html'
})
export class rctwrksaddComponent implements OnInit {
  contactForm: FormGroup;
  constructor(
    private _fb: FormBuilder,
    public api: ApiService,
    public router: Router
  ) {
    this.contactForm = this._fb.group({
      cat_id: ["", Validators.required],
      homename: ["", Validators.required],
      title: ["", Validators.required],
      qtxt: ["", Validators.required],
      shdcr: ["", Validators.required],
      fdcr: ["", Validators.required],
      file: ["", Validators.required],
      whatwegot1: ["", Validators.required],
      whatwegot2: ["", Validators.required],
      whatwegot3: ["", Validators.required],
    });
  }

  ngOnInit(): void {}
  rcntwrksaddData() {
    this.api.rcntwrksaddData(this.contactForm.value).subscribe((response: any) => {
      
      this.router.navigate(["rctwrkcatgoryadd"]);
    }, error => {
console.log("error");
    });
  }
}

 
