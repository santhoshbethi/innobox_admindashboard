import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ApiService } from "../../services/api.service";


@Component({
  selector: 'app-dashboard',
  templateUrl: 'rctwrkcatgoryadd.component.html'
})
export class rctwrkcatgoryaddComponent implements OnInit {
  contactForm: FormGroup;
  data:any =[];

  constructor(
    private _fb: FormBuilder,
    public api: ApiService,
    public router: Router
  ) {
    this.contactForm = this._fb.group({
      name: ["", Validators.required],
    });
  }

  ngOnInit(): void {
    var obj = sessionStorage.getItem("data");
     this.data = JSON.parse(obj);

    if (this.data) {
      this.contactForm.patchValue(this.data);
     }
  }

  ngOnDestroy(): void {
    sessionStorage.removeItem("data");
  }

  rcntwrkcataddData() {
    if(this.data == null){
    this.api.recentworkcataddcat(this.contactForm.value).subscribe((response: any) => {
      
      this.router.navigate(["recentworkscat"]);
    }, error => {
     console.log("error");
    });
  }
  else{
    const formatData= this.formatData(this.contactForm.value, this.data);
    this.api.updateRctcat(formatData).subscribe(data=> {
      console.log(data);
      this.router.navigate(["recentworkscat"]);

         
        }, error =>{
          console.log("error");
         });
        }
      }

      formatData(form, data){
          return{
            name: form.name,
            status: form.status,
            id: data.ID
          }
      }


}