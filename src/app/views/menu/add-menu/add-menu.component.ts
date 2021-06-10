import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../../services/api.service';

import { Router } from "@angular/router";

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.scss']
})
export class AddMenuComponent {

  menuForm: FormGroup;
  rows: any;
  columns: any;
  id: any;
  data: any = [];

  constructor(
    public api: ApiService,
    private router: Router,
    private _fb: FormBuilder
  ) {
    this.menuForm = this._fb.group({
      menuname: ["", Validators.required],
      parent: ["", Validators.required],
    });
  }

  ngOnInit() {
    var obj = sessionStorage.getItem("data");
    this.data = JSON.parse(obj);
    if (this.data) {
      this.menuForm.patchValue(this.data);
      this.menuForm.controls.menuname.setValue(this.data.itemName);
      this.menuForm.controls.parent.setValue(this.data.refID);
      console.log(this.menuForm);
    }
    this.getMenu();
  }

  ngOnDestroy() {
    sessionStorage.removeItem('data');
  }


  getMenu() {
    this.api.getMenu().subscribe((response) => {
      let res = JSON.parse(JSON.stringify(response));

      if (res.message) {
        this.rows = res.message;

      } else {
        console.log("errror", res);
      }
    });
  }

  addMenu() {
    //  console.log(this.menuForm.value);
    var form = this.menuForm.value;
    form.href = "href";
    console.log(form);

    if (this.data.ID == null) {
      this.api.addMenuWithParent(form).subscribe(
        (response: any) => {
          this.router.navigate(["menu"]);
        },
        (error) => {
          console.log("error");
        });
    } else {
      const formatData = this.menuForm.value;
      formatData.id = this.data.ID;
      formatData.refID= this.menuForm.controls.parent.value
      this.api.updateMenus(formatData).subscribe(
        (response: any) => {
          this.router.navigate(["menu"]);
        },
        (error) => {
          console.log("error");
        });
    }

  }

}
