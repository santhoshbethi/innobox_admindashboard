import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ApiService } from "../../services/api.service";
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: "app-dashboard",
  templateUrl: "recentworksadd.component.html",
})
export class rctwrksaddComponent implements OnInit {
  contactForm: FormGroup;
  id: any;
  res: any;
  rows:any;
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
      cat_id: ["", Validators.required],
      homename: ["", Validators.required],
      title: ["", Validators.required],
      qtxt: ["", Validators.required],
      shdcr: ["", Validators.required],
      fdcr: ["", Validators.required],
      file: ["", Validators.required],
      status: ["", Validators.required],
      whatwegot1: ["", Validators.required],
      whatwegot2: ["", Validators.required],
      whatwegot3: ["", Validators.required],
    });
  }

  ngOnInit(): void {
    this.getCat();
    this.id = sessionStorage.getItem("id");
    if (this.id) {
      this.getData();
      
    }
  }

  ngOnDestroy(): void {
    sessionStorage.removeItem("id");
  }
  getCat(){
    this.api.getCat().subscribe((response) => {
      let res = JSON.parse(JSON.stringify(response));
      
      if (res.message) {
        this.rows = res.message;
        console.log(this.rows);
               
      } else {
        console.log("errror", res);
      }
    });
  }

  getData() {
    if (this.id != null) {
      const formatData = this.formatData(this.id);
      this.api.getRecentWorkById(formatData).subscribe((res: any) => {
        res.message.file = res.message[0].image1.value;
        this.res = res.message[0];
        this.contactForm.patchValue(this.res);
        console.log(this.contactForm);
      });
    }
  }

  formatData(id) {
    return {
      id: id,
    };
  }

  rcntwrksaddData() {
    let _form = new FormData();
    for (const [key, val] of Object.entries(this.contactForm.value)) {
      if (key === "file") {
        _form.append(key, this.contactForm.get(key)?.value);
      } else {
        _form.append(key, this.contactForm.get(key)?.value);
      }
    }
    if (this.id == null) {
      this.api.rcntwrksaddData(_form).subscribe(
        (response: any) => {
          this.router.navigate(["recentworks"]);
        },
        (error) => {
          console.log("error");
        }
      );
    } else {
      const formatData = this.contactForm.value;
      _form.append('id', this.id);
      this.api.updateRctwrk(_form).subscribe(
        (response: any) => {
          this.router.navigate(["recentworks"]);
        },
        (error) => {
          console.log("error");
        }
      );
    }
  }

  uploadFileEvt(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.contactForm.get("file").setValue(file);
    }
  }
}
