import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { ApiService } from "../../../../services/api.service";
import { AngularEditorConfig } from '@kolkov/angular-editor';


@Component({
  selector: "app-whatwedocounter",
  templateUrl: "./addwhatwedocounter.component.html",

})
export class addwhatwedocounterComponent implements OnInit {
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
    const formatData = this.contactForm.value;
    formatData.id = this.data.ID;
    formatData.status = this.data.status;

    this.api.updateStaticData(formatData).subscribe((response: any) => {
      this.router.navigate(["whatwedocounter"]);
    }, error => {
      console.log("error");
    });
  }
}

