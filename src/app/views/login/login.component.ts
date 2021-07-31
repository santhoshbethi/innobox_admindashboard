import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router,ActivatedRoute } from "@angular/router";
import { ApiService } from "../../services/api.service";
import { AngularEditorConfig } from '@kolkov/angular-editor';



@Component({ templateUrl: 'login.component.html' })
export class LoginComponent implements OnInit {
    form: FormGroup;
    loading = false;
    submitted = false;

    constructor(
      private formBuilder: FormBuilder,
      public api: ApiService,
      public router: Router,
      private route: ActivatedRoute
      
    ) { }

    ngOnInit() {
        this.form = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }

    onSubmit() {
      this.loading = true;
        if (this.form.invalid) {
          alert("Please fill all values");
          this.loading = false;

        }
 
       
        this.api.login({username:this.f.username.value,password:this.f.password.value}).subscribe(
          (response: any) => {
           if(response.accessToken)
           {
            sessionStorage.setItem('UserId', response.username);
            sessionStorage.setItem('token', response.accessToken);
        
            this.router.navigate(["home"]);
           }
            else
            this.router.navigate(["login"]);
          },
          (error) => {
            console.log("error");
          }
        );
      
     
    }
}