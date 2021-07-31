
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "../../services/api.service";

@Component({
  selector: 'Home-dashboard',
  templateUrl: 'home.component.html'
})
export class HomeComponent {
  constructor(public api: ApiService, private router: Router) {}
  updateStat(id){
    if(id==1)
    {
    
     this.router.navigate(["homeslider"]);
    }
    if(id==2)
    {
     alert(id);
     this.router.navigate(["add-career"]);
    }
    if(id==3)
    {
    
     this.router.navigate(["topimages"]);
    }
 }
 
}
 

  
