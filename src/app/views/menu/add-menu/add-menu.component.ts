import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { ApiService } from '../../../services/api.service';


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
export class AddMenuComponent implements OnInit {

 

  constructor(
    public api: ApiService,

  ) {}

  ngOnInit(): void {

    this.api.getMenu().subscribe((response) => {
      let res = JSON.parse(JSON.stringify(response));
    });  
  }

  

}
