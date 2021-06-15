import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "../../services/api.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "careers.component.html",
})
export class homeSliderComponent {
  rows: any;
  columns: any;
  flag: any = true;
  constructor(public api: ApiService, private router: Router) {}
  ngOnInit() {
    this.getHomeSlider();
    this.columns = [
      {
        title: "Job Title",
        field: "jobTitle",
      },
      {
        title: "Location",
        field: "locationCountry",
      },
      {
        title: "Open Position",
        field: "opens",
      },
      {
        title: "Experience",
        field: "experience",
      },
    
      {
        title: "Action",
        field: "action",
      },
    ];
  }
  getHomeSlider() {
    this.api.getHomeSliders().subscribe((response) => {
      let res = JSON.parse(JSON.stringify(response));
      console.log(res);
      if (res.message) {
        this.rows = res.message;
      } else {
        console.log("errror", res);
      }
    });
  }

  updateCareer(id){
    this.router.navigate(['edit-career']);
    sessionStorage.setItem('id', id);
    // sessionStorage.setItem('isEditClicked', 'true');
  }

  addcareer() {
   sessionStorage.removeItem('id');
    this.router.navigate(["add-career"]);
    // sessionStorage.setItem('isEditClicked', 'true');

  }
  updateStatus(items: any,event){
let status : number;
    if(event.checked)
    {
    status=0;
    }
    else
    {
      status=1;
    }


   this.api.updateCareer({id:items.ID,status:status}).subscribe(data=> {
console.log(data);

   },
   error =>{
    console.log("error");
   })

  }
}
