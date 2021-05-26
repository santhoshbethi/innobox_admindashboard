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
  getService(){
    return this.http.get(`${environment.apiUrl}services/getservices`, {
      headers: this.headers,
  });
}
  getContact(){
    return this.http.get(`${environment.apiUrl}home/contact`, {
      headers: this.headers,
  });
  
}
  //POST APIs

  addCareer(data: any) {
    return this.http.post(`${environment.apiUrl}home/addcareers`, data, {
      headers: this.headers,
    });
  }


  updateCareer(data: any) {
    console.log(data);
    return this.http.post(`${environment.apiUrl}home/updatecareers`, data, {
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
  return this.http.post(`${environment.apiUrl}home/addcontact`, data, {
    headers: this.headers,
  });

}
}