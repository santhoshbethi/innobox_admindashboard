import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "../../../services/api.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "homeslider.component.html",
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
        title: "Name",
        field: "title",
      },
      {
        title: "Heading",
        field: "Heading",
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

      if (res.message) {
        this.rows = res.message;
      } else {
        console.log("errror", res);
      }
    });
  }

  updateHomeslder(data:any){
    this.router.navigate(['add-homeslider']);
    sessionStorage.setItem('data', JSON.stringify(data));
    // sessionStorage.setItem('isEditClicked', 'true');
  }

  addcareer() {
   sessionStorage.removeItem('id');
    this.router.navigate(["add-homeslider"]);
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


   this.api.updateSliderImage({id:items.ID,status:status}).subscribe(data=> {
console.log(data);

   },
   error =>{
    console.log("error");
   })

  }
}
