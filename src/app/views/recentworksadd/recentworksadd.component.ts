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

    let _form = new FormData();
    for (const [key, val] of Object.entries(this.contactForm.value)) {
      if (key === "file") {
        _form.append(key, this.contactForm.get(key)?.value);
      } else {
        _form.append(key, this.contactForm.get(key)?.value);
      }
    }
    this.api.rcntwrksaddData(_form).subscribe((response: any) => {
      console.log(response);
      
     this.router.navigate(["recentworks"]);
    }, error => {
console.log("error");
    });
  }

  uploadFileEvt(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      // this.imageFile = file;
      this.contactForm.get("file").setValue(file);
    }
  }
}

 
