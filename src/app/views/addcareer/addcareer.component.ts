import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router,ActivatedRoute } from "@angular/router";
import { ApiService } from "../../services/api.service";
import { AngularEditorConfig } from '@kolkov/angular-editor';


@Component({
  selector: "app-addcareer",
  templateUrl: "./addcareer.component.html",
  
})
export class AddcareerComponent implements OnInit {
  careerForm: FormGroup;
  imageFile: File;
  id: any;
  res: any;
  isEditClicked: boolean = false;
  addButtonClicked: any;
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
    public router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.id = sessionStorage.getItem("id");
    if (this.id) {
      const formatData = this.formatData(this.id);
      this.api.getCareersById(formatData).subscribe((res: any) => {
        res.message.title = res.message.jobTitle;
        res.message.location = res.message.locationCountry;
        this.res = res.message;
        console.log(this.res);
        this.careerForm.patchValue(this.res);
      });
    }

    this.careerForm = this._fb.group({
      title: ["", Validators.required],
      experience: ["", Validators.required],
      location: ["", Validators.required],
      opens: ["", Validators.required],
      description: ["", Validators.required],
      file: ["", Validators.required],
      status: ["", Validators.required],
    });
  }
  formatData(careersId) {
    return {
      id: careersId,
    };
  }

  uploadFileEvt(event: any, fileName: string) {
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
           
           if(width==350 && height == 219)
           this.careerForm.get("file").setValue(file);
           else
           this.careerForm.get("file").setValue("");
           alert("please select image with proper dimensions(350X219)");
          };
        };
      }
    }
  }

  

  addData () {
    if(this.careerForm.get('experience').value && this.careerForm.get('title').value &&
    this.careerForm.get('experience').value && this.careerForm.get('opens').value &&  this.careerForm.get('description').value ){
    let _form = new FormData();
    _form.append('title', this.careerForm.get('title').value);
    _form.append('experience', this.careerForm.get('experience').value);
    _form.append('location', this.careerForm.get('location').value);
    _form.append('opens', this.careerForm.get('opens').value);
    _form.append('description', this.careerForm.get('description').value);
    _form.append('file', this.careerForm.get('file').value);
    _form.append('status', this.careerForm.get('status').value);



    if (this.id == null) {
      if(this.careerForm.get('file').value)
      {
      this.api.addCareer(_form).subscribe(
        (response: any) => {
          this.router.navigate(["careers"]);
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
     
      _form.append('id', this.id);
      console.log(_form);
      this.api.updateCareer(_form).subscribe(
        (response: any) => {
          this.router.navigate(["careers"]);
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

}