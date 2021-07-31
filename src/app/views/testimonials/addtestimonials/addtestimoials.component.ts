import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ApiService } from "../../../services/api.service";

@Component({
  selector: 'app-testominals',
  templateUrl: 'addtestimoials.component.html'
})
export class addtestimoialsComponent implements OnInit {
  contactForm: FormGroup;
  data: any = [];

  constructor(
    private _fb: FormBuilder,
    public api: ApiService,
    public router: Router
  ) {
    this.contactForm = this._fb.group({
      customerName: ["", Validators.required],
      content: ["", Validators.required],

    });
  }

  ngOnInit(): void {
    var obj = sessionStorage.getItem("data");
    this.data = JSON.parse(obj);
    if (this.data) {
      this.contactForm.patchValue(this.data);
    }
  }

  ngOnDestroy() {
    this.data = sessionStorage.removeItem("data");
  }

  contactData() {
    if(this.data== null){
    this.api.addtestimonials(this.contactForm.value).subscribe((response: any) => {
      this.router.navigate(["testimonials"]);
    }, error => {
      console.log("error");
    });
  }else{
  
    const formatData = this.contactForm.value;
    formatData.id = this.data.ID;
    this.api.updateTestimonials(formatData).subscribe((response: any) => {
      this.router.navigate(["testimonials"]);
    }, error => {
      console.log("error");
    });
  }
}

}