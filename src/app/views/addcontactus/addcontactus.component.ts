import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ApiService } from "../../services/api.service";

@Component({
  selector: 'app-contactus',
  templateUrl: 'addcontactus.component.html'
})
export class addContactusComponent implements OnInit {
  contactForm: FormGroup;
  constructor(
    private _fb: FormBuilder,
    public api: ApiService,
    public router: Router
  ) {
    this.contactForm = this._fb.group({
      locationName: ["", Validators.required],
      locationCountry: ["", Validators.required],
      locationAddress: ["", Validators.required],
      phoneNumber: ["", Validators.required],
      emailAddress: ["", Validators.required],
      locationLan: ["", Validators.required],
      locationLat: ["", Validators.required],
    });
  }

  ngOnInit(): void {}
  contactData() {
    this.api.addContact(this.contactForm.value).subscribe((response: any) => {
      
      this.router.navigate(["contactus"]);
    }, error => {
console.log("error");
    });
  }
}