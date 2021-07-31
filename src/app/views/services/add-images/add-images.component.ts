import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-add-images',
  templateUrl: './add-images.component.html',
  styleUrls: ['./add-images.component.scss']
})
export class AddImagesComponent implements OnInit {

  imageForm: FormGroup;
  value: any;
  id: any;
  envi:any;
  image1:any;
  image2:any;
  url:any;
  width:any;
  height:any;

  constructor(private _fb: FormBuilder,
    public api: ApiService,
    public router: Router) {
      this.imageForm = this._fb.group({
        file: ["", Validators.required],
        type: ["", Validators.required],
      });
     }

  ngOnInit(): void {
    this.id = sessionStorage.getItem('id');
    console.log("here");
    console.log(this.id);
    if (this.id) {
      this.fetchData();
    }
    this.envi=environment;
    this.url=this.envi.imageUrl;
  }

  ngOnDestroy() {
    sessionStorage.removeItem('id');
  }

  fetchData() {
    // const formatData = this.formatData(this.id);
     this.api.getServicesById({"id":this.id}).subscribe((response: any) => {    
       this.value = response.message;
       this.image1=this.value['0'].maindata['0'].image1;
       this.image2=this.value['0'].maindata['0'].image2;
     }, error => {
       console.log("error");
     });
   }

  addImage() {
    let _form = new FormData();
    _form.append("id", this.id);
    for (const [key, val] of Object.entries(this.imageForm.value)) {
      if(this.imageForm.get("file").value)
      {
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
    else
    {
      alert("please select image");
    }
  }
  }

  // uploadFileEvt(event) {
  //   if (event.target.files.length > 0) {
  //     const file = event.target.files[0];
  //     console.log(file.height);

  //     this.imageForm.get("file").setValue(file);
    
  // }
  // }
  uploadFileEvt(event: any, fileName: string) {
    if (event.target.files && event.target.files.length) {
      for (const file of event.target.files) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          const img = new Image();
          img.src = reader.result as string;
          img.onload = () => {
            if(this.imageForm.get("type").value)
            {
            const height = img.naturalHeight;
            const width = img.naturalWidth;
            if(this.imageForm.get("type").value=='m'){
           if(width==1500 && height==400)
           this.imageForm.get("file").setValue(file);
           else
           this.imageForm.get("file").setValue("");
           alert("please select image with proper dimensions(1500X400)");
            }
            else
            {
              if(width>280 && height>142)
              this.imageForm.get("file").setValue(file);
              else
              this.imageForm.get("file").setValue("");
              alert("please select image with proper dimensions more than(1000 X 800)");
            }
          }
          else
          {
            this.imageForm.get("file").setValue("");
            alert("select image type");
          }
          };
        
        };
      }
    }
  }
}
