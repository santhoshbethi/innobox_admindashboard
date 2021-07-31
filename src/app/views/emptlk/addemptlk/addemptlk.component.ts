import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ApiService } from "../../../services/api.service";
import { AngularEditorConfig } from '@kolkov/angular-editor';
@Component({
  selector: 'app-addemptlk',
  templateUrl: 'addemptlk.component.html'
})
export class addemptlkComponent implements OnInit {
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
      name: ["", Validators.required],
      message: ["", Validators.required],
     

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
    if(this.data== null){
    this.api.addemptlk(this.contactForm.value).subscribe((response: any) => {
    
      this.router.navigate(["emptlk"]);
    }, error => {
      console.log("error");
    });
  }else{
  
    const formatData = this.contactForm.value;
    formatData.id = this.data.ID;
    this.api.updateemptlk(formatData).subscribe((response: any) => {
      alert(response);
      this.router.navigate(["emptlk"]);
    }, error => {
      console.log("error");
    });
  }
}

}