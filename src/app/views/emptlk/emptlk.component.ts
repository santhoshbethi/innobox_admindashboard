import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "../../services/api.service";


@Component({
  selector: "app-emptlk",
  templateUrl: "emptlk.component.html",
})
export class emptlkComponent {
  rows: any;
  columns: any;
  constructor(public api: ApiService, private router: Router) {}
  ngOnInit() {
    this.getService();
    this.columns = [
      {
        title: "S No",
        field: "ID",
      },
      {
        title: "Name",
        field: "name",
      },
      {
        title: "Review",
        field: "message",
      },
    
      {
        title: "Content",
        field: "content",
      }
     
    ];
  }
  getService() {
    this.api.getemptlk().subscribe((response) => {
      let res = JSON.parse(JSON.stringify(response));
      console.log(res);
      if (res.message) {
        this.rows = res.message;
      } else {
        console.log("errror", res);
      }
    });
  }

  addservices() {


    this.router.navigate(["addemptlk"]);
  }


  editServices(data){
    sessionStorage.setItem('data', JSON.stringify(data));
    this.router.navigate(["addemptlk"]);

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
    
    
       this.api.updateemptlk({id:items.ID,status:status}).subscribe(data=> {
    console.log(data);
    
       },
       error =>{
        console.log("error");
       })
    
      }

 
}
