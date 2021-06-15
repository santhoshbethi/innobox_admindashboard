import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.scss']
})
export class HighlightsComponent implements OnInit {
  ContentForm: FormGroup;
  id: any;
  value: any;
  clicked: boolean= false;
  constructor(
    private _fb: FormBuilder,
    public api: ApiService,
    public router: Router
  ) {
    this.ContentForm = this._fb.group({
      // serviceID: ["", Validators.required],
      content: ["", Validators.required],
      // status: ["", Validators.required]
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

  ngOnDestroy(): void {
    sessionStorage.removeItem('id');
  }

  fetchData() {
   // const formatData = this.formatData(this.id);
    this.api.getServiceHighlightById({"id":this.id}).subscribe((response: any) => {
      console.log(response);
      // this.serviceForm.patchValue(response.message[0].maindata[0])
      this.value = response.message;
    }, error => {
      console.log("error");
    });
  }

  formatData(serviceID) {
    return {
      "id": serviceID,
    };
  }

  addButtonClicked(){
    this.clicked= !this.clicked;
  }

  addContent(){
   const data = this.ContentForm.value;
   data.servicesid = this.id;
   data.content = this.ContentForm.controls.content.value;
   this.api.addHighlights(data).subscribe((response: any) => {
   
    window.location.reload()
  }, error => {
    console.log("error");
  });
  }

}
