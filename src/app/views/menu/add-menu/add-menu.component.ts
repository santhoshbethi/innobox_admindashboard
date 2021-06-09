import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { ApiService } from '../../../services/api.service';

import { Router } from "@angular/router";



interface Pokemon {
  value: string;
  viewValue: string;
}

interface PokemonGroup {
  disabled?: boolean;
  name: string;
  pokemon: Pokemon[];
}


@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.scss']
})
export class AddMenuComponent{
  rows: any;
  columns: any;
  constructor(public api: ApiService, private router: Router) {}
  ngOnInit() {
    this.getMenu();
    
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

}
