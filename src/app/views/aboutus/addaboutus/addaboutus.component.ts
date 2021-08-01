import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ApiService } from "../../../services/api.service";
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { exit } from "process";
@Component({
  selector: 'app-addaboutus',
  templateUrl: 'addaboutus.component.html'
})
export class addaboutusComponent implements OnInit {
  contactForm: FormGroup;
  data: any = [];
  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '7rem',
    placeholder: 'Enter text here...'
  };

  constructor(
    private _fb: FormBuilder,
    public api: ApiService,
    public router: Router
  ) {
    this.contactForm = this._fb.group({
      title: ["", Validators.required],
      value: ["", Validators.required],
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
    if (this.data == null) {
      console.log(this.contactForm.value);
      this.api.addaboutus(this.contactForm.value).subscribe((response: any) => {
        this.router.navigate(["aboutus"]);
      }, error => {
        console.log("error");
      });
    } else {

      const formatData = this.contactForm.value;
      formatData.id = this.data.ID;
      formatData.fileval = '';
      this.api.updateaboutus(formatData).subscribe((response: any) => {
        alert(response);
        this.router.navigate(["aboutus"]);
      }, error => {
        console.log("error");
      });
    }
  }

}