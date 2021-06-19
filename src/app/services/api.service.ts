import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  headers = environment.headers;
  constructor(private http: HttpClient) {}

  //GET APIs
  

  getHighlight(data: any) {
 
  return this.http.post(`${environment.apiUrl}services/getserviceshighlights`, data, {
    headers: this.headers,
  });
}
  getMenu() {
    return this.http.get(`${environment.apiUrl}home/menu`, {
      headers: this.headers,
    });
  }

  getCareers() {
    return this.http.get(`${environment.apiUrl}home/careers`, {
      headers: this.headers,
    });
  }
  getCat(){
    return this.http.get(`${environment.apiUrl}rectwrks/getcat`, {
      headers: this.headers,
  });
}
  getService(){
    return this.http.get(`${environment.apiUrl}services/getservices`, {
      headers: this.headers,
  });
}
  getContact(){
    return this.http.get(`${environment.apiUrl}cts/getaddress`, {
      headers: this.headers,
  });
}
  getRecentworkCat(){
    return this.http.get(`${environment.apiUrl}rectwrks/getcat`, {
      headers: this.headers,});
}
getRecentwork(){
  return this.http.get(`${environment.apiUrl}rectwrks/recentwroks`, {
    headers: this.headers,});
}
getServicesById(data:any){
  return this.http.post(`${environment.apiUrl}services/getservicesbyid`, data, {
    headers: this.headers,
  });
}
  getHomeSliders(){
    return this.http.get(`${environment.apiUrl}home/homeslider`, {
      headers: this.headers,
    });
}

  //POST APIs

  addCareer(data: any) {
    return this.http.post(`${environment.apiUrl}home/addcareers`, data, {
      headers: this.headers,
    });
  }

  addServiceImages(data: any) {
    return this.http.post(`${environment.apiUrl}services/addservicesimage`, data, {
      headers: this.headers,
    });
  }


  getCareersById(data:any){
    return this.http.post(`${environment.apiUrl}home/careerbyid`, data, {
      headers: this.headers,
    });
  }

  getRecentWorkById(data:any){
    return this.http.post(`${environment.apiUrl}rectwrks/recentwroksbyid`, data, {
      headers: this.headers,
    });
  }
  getServiceHighlightById(data:any){
    return this.http.post(`${environment.apiUrl}services/getserviceshighlights`, data, {
      headers: this.headers,
    });
  }

  updateCareer(data: any) {
    console.log(data);
    return this.http.post(`${environment.apiUrl}home/updatecareers`, data, {
      headers: this.headers,
    });
  }

  
  updateMenus(data: any) {
    console.log(data);
    return this.http.post(`${environment.apiUrl}home/updatemenudata`, data, {
      headers: this.headers,
    });
  }
  updateRctwrk(data: any) {
    console.log(data);
    return this.http.post(`${environment.apiUrl}rectwrks/updaterecentwroks`, data, {
      headers: this.headers,
    });
  }
  
  updateRctcat(data: any) {
    console.log(data);
    return this.http.post(`${environment.apiUrl}rectwrks/updatecat`, data, {
      headers: this.headers,
    });
  }

  updateContact(data: any) {
    return this.http.post(`${environment.apiUrl}cts/updateaddress`, data, {
      headers: this.headers,
    });
  }

  addService(data: any) {
    console.log(data);
    return this.http.post(`${environment.apiUrl}services/addservices`, data, {
      headers: this.headers,
    });
}

addContact(data: any) {
  return this.http.post(`${environment.apiUrl}cts/addaddress`, data, {
    headers: this.headers,
  });
}

rcntwrksaddData(data: any) {
  return this.http.post(`${environment.apiUrl}rectwrks/addrecentwroks`, data, {
    headers: this.headers,
  });
}
recentworkcataddcat(data: any) {
  console.log(data);
  return this.http.post(`${environment.apiUrl}rectwrks/addcat`, data, {
    headers: this.headers,
  });
}

addMenuWithParent(data:any){
  return this.http.post(`${environment.apiUrl}home/addmenu`, data, {
    headers: this.headers,
  });
  }

  addHighlights(data:any){
    return this.http.post(`${environment.apiUrl}services/addserviceshtls`, data, {
      headers: this.headers,
    });
    }
}