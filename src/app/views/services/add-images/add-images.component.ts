import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-add-images',
  templateUrl: './add-images.component.html',
  styleUrls: ['./add-images.component.scss']
})
export class AddImagesComponent implements OnInit {

  imageForm: FormGroup;

  constructor(private _fb: FormBuilder,
    public api: ApiService,
    public router: Router) { }

  ngOnInit(): void {
    this.imageForm = this._fb.group({
      file: ["", Validators.required],
    });
  }

  addImage() {
    let _form = new FormData();
    for (const [key, val] of Object.entries(this.imageForm.value)) {
      if (key === "file") {
        _form.append(key, this.imageForm.get(key)?.value);
      } else {
        _form.append(key, this.imageForm.get(key)?.value);
      }
      this.api.addServiceImages(_form).subscribe(
        (response: any) => {
          this.router.navigate(["services"]);
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
      // this.imageFile = file;
      this.imageForm.get("file").setValue(file);
    }
  }
}
