import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ApiService } from "../../../services/api.service";
import { AngularEditorConfig } from '@kolkov/angular-editor';
@Component({
  selector: "app-topimages",
  templateUrl: "addtopimages.component.html",
})
export class addTopImagesComponent implements OnInit {
  sliderForm: FormGroup;
  data: any = [];
  id:any;
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
    this.sliderForm = this._fb.group({
      title: ["", Validators.required],
      text: ["", Validators.required],
      file:["", Validators.required],
     

    });
  }

  ngOnInit(): void {
    var obj = sessionStorage.getItem("data");
    this.data = JSON.parse(obj);
    console.log(this.data.ID);
    if (this.data) {
      this.sliderForm.patchValue(this.data);
    }
  }

  ngOnDestroy() {
    this.data = sessionStorage.removeItem("data");
  }

  addData () {
    if( this.sliderForm.get('title').value &&
    this.sliderForm.get('text').value  ){
    let _form = new FormData();
    _form.append('title', this.sliderForm.get('title').value);
    _form.append('text', this.sliderForm.get('text').value);

    _form.append('file', this.sliderForm.get('file').value);
   



    if (this.data==null) {
      
      if(this.sliderForm.get('file').value)
      {
      this.api.addSliderImage(_form).subscribe(
        (response: any) => {
          this.router.navigate(["home"]);
        },
        (error) => {
          console.log("error");
        }
      );
      }
      else
      {
        alert("please Fill all values");
      }
    } else {
    
      _form.append('id', this.data.ID);
  
      this.api.updateSliderImage(_form).subscribe(
        (response: any) => {
          this.router.navigate(["home"]);
        },
        (error) => {
          console.log("error");
        }
      );
    }
  }
  else
{
  alert("please Fill all values");
}
}
uploadFileEvt(event: any, fileName: string) {
  alert();
  if (event.target.files && event.target.files.length) {
    for (const file of event.target.files) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const img = new Image();
        img.src = reader.result as string;
        img.onload = () => {
          const height = img.naturalHeight;
          const width = img.naturalWidth;
         
         if(width==1200 && height == 600)
         this.sliderForm.get("file").setValue(file);
         else
         {
         this.sliderForm.get("file").setValue("");
         alert("please select image with proper dimensions(1200X600)");
         }
        };
      };
    }
  }
}
}