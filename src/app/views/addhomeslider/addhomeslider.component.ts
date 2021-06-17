import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ApiService } from "../../services/api.service";

@Component({
  selector: "app-homeslider",
  templateUrl: "./addhomeslider.component.html",
})
export class addHomeSliderComponent implements OnInit {
  careerForm: FormGroup;
  imageFile: File;
  id: any;
  res: any;
  isEditClicked: boolean = false;
  addButtonClicked: any;

  constructor(
    private _fb: FormBuilder,
    public api: ApiService,
    public router: Router
  ) {
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

  ngOnInit(): void {
    this.id = sessionStorage.getItem("id");
    if (this.id) {
      this.getData();
    }
  }

  ngOnDestroy(): void {
    sessionStorage.removeItem("id");
  }

  getData() {
    if (this.id != null) {
      const formatData = this.formatData(this.id);
      this.api.getCareersById(formatData).subscribe((res: any) => {
        res.message.title = res.message.jobTitle;
        res.message.location = res.message.locationCountry;
        this.res = res.message;
        this.careerForm.patchValue(this.res);
      });
    }
  }

  formatData(careersId) {
    return {
      id: careersId,
    };
  }

  addData() {
    let _form = new FormData();
    for (const [key, val] of Object.entries(this.careerForm.value)) {
      if (key === "file") {
        _form.append(key, this.careerForm.get(key)?.value);
      } else {
        _form.append(key, this.careerForm.get(key)?.value);
      }
    }
    if (this.id == null) {
      this.api.addCareer(_form).subscribe(
        (response: any) => {
          this.router.navigate(["careers"]);
        },
        (error) => {
          console.log("error");
        }
      );
    } else {
      const formatData = this.careerForm.value;
      formatData.id = this.id;
      this.api.updateCareer(formatData).subscribe(
        (response: any) => {
          this.router.navigate(["careers"]);
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
      this.careerForm.get("file").setValue(file);
    }
  }
}
