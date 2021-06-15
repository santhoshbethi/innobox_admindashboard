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
  value: any;
  id: any;

  constructor(private _fb: FormBuilder,
    public api: ApiService,
    public router: Router) {
      this.imageForm = this._fb.group({
        file: ["", Validators.required],
      });
     }

  ngOnInit(): void {
    this.id = sessionStorage.getItem('id');
    console.log("here");
    console.log(this.id);
    if (this.id) {
      this.fetchData();
    }
  }

  fetchData() {
    // const formatData = this.formatData(this.id);
     this.api.getServicesById({"id":this.id}).subscribe((response: any) => {
       console.log(response);
       // this.serviceForm.patchValue(response.message[0].maindata[0])
       this.value = response.message;
       console.log(this.value);
     }, error => {
       console.log("error");
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
