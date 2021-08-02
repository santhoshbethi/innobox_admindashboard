import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  headers = environment.headers;
  constructor(private http: HttpClient) { }

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
  getwhyinb() {
    return this.http.get(`${environment.apiUrl}home/getwhyinb`, {
      headers: this.headers,
    });
  }
  getMenulist() {
    return this.http.get(`${environment.apiUrl}home/homemenu`, {
      headers: this.headers,
    });
  }


  getCareers() {
    return this.http.get(`${environment.apiUrl}home/careers`, {
      headers: this.headers,
    });
  }

  getStaticData() {
    return this.http.get(`${environment.apiUrl}home/getstaticdata`, {
      headers: this.headers,
    });
  }
  getCat() {
    return this.http.get(`${environment.apiUrl}rectwrks/getcat`, {
      headers: this.headers,
    });
  }
  getService() {
    return this.http.get(`${environment.apiUrl}services/getservices`, {
      headers: this.headers,
    });
  }

  getTestimonials() {
    return this.http.get(`${environment.apiUrl}home/gettestimonials`, {
      headers: this.headers,
    });
  }

  // app.post("/api/home/addtestimonials", homepage.addtestimonials);
  // app.post("/api/home/testimonials", homepage.tstmbyid);

  getContact() {
    return this.http.get(`${environment.apiUrl}cts/getaddress`, {
      headers: this.headers,
    });
  }
  getRecentworkCat() {
    return this.http.get(`${environment.apiUrl}rectwrks/getcat`, {
      headers: this.headers,
    });
  }
  getRecentwork() {
    return this.http.get(`${environment.apiUrl}rectwrks/recentwroks`, {
      headers: this.headers,
    });
  }
  getServicesById(data: any) {
    return this.http.post(`${environment.apiUrl}services/getservicesbyid`, data, {
      headers: this.headers,
    });
  }
  getHomeSliders() {
    return this.http.get(`${environment.apiUrl}home/getsliderimage`, {
      headers: this.headers,
    });
  }

  getTopImages() {
    return this.http.get(`${environment.apiUrl}home/gettopimg`, {
      headers: this.headers,
    });
  }

  getwhyus() {
    return this.http.get(`${environment.apiUrl}home/getwhyus`, {
      headers: this.headers,
    });
  }
  getaboutus() {
    return this.http.get(`${environment.apiUrl}home/getabtus`, {
      headers: this.headers,
    });
  }
  getemptlk() {
    return this.http.get(`${environment.apiUrl}home/getemptlk`, {
      headers: this.headers,
    });
  }

  //POST APIs

  addCareer(data: any) {
    return this.http.post(`${environment.apiUrl}home/addcareers`, data, {
      headers: this.headers,
    });
  }
  addSliderImage(data: any) {
    return this.http.post(`${environment.apiUrl}home/addsliderimage`, data, {
      headers: this.headers,
    });
  }
  addTopImage(data: any) {
    return this.http.post(`${environment.apiUrl}home/addtopimg`, data, {
      headers: this.headers,
    });
  }
  updateSliderImage(data: any) {
    return this.http.post(`${environment.apiUrl}home/updatesliderimage`, data, {
      headers: this.headers,
    });
  }
  updateTopImages(data: any) {
    return this.http.post(`${environment.apiUrl}home/updatetopimg`, data, {
      headers: this.headers,
    });
  }


  login(data: any) {

    return this.http.post(`${environment.apiUrl}home/login`, data, {
      headers: this.headers,
    });
  }
  addServiceImages(data: any) {
    return this.http.post(`${environment.apiUrl}services/addservicesimage`, data, {
      headers: this.headers,
    });
  }


  getCareersById(data: any) {
    return this.http.post(`${environment.apiUrl}home/careerbyid`, data, {
      headers: this.headers,
    });
  }

  getRecentWorkById(data: any) {
    return this.http.post(`${environment.apiUrl}rectwrks/recentwroksbyid`, data, {
      headers: this.headers,
    });
  }
  getServiceHighlightById(data: any) {
    return this.http.post(`${environment.apiUrl}services/getserviceshighlights`, data, {
      headers: this.headers,
    });
  }

  updateCareer(data: any) {

    return this.http.post(`${environment.apiUrl}home/updatecareers`, data, {
      headers: this.headers,
    });
  }

  updateStaticData(data: any) {
    console.log(data);
    return this.http.post(`${environment.apiUrl}home/updatestaticdata`, data, {
      headers: this.headers,
    });
  }

  updateTestimonials(data: any) {

    return this.http.post(`${environment.apiUrl}home/updatetestimonials`, data, {
      headers: this.headers,
    });
  }
  updatewhyus(data: any) {

    return this.http.post(`${environment.apiUrl}home/updatewhyus`, data, {
      headers: this.headers,
    });
  }

  updateaboutus(data: any) {

    return this.http.post(`${environment.apiUrl}home/updateabtus`, data, {
      headers: this.headers,
    });
  }

  addtestimonials(data: any) {

    return this.http.post(`${environment.apiUrl}home/addtestimonials`, data, {
      headers: this.headers,
    });
  }
  updateemptlk(data: any) {

    return this.http.post(`${environment.apiUrl}home/updateemptlk`, data, {
      headers: this.headers,
    });
  }

  addemptlk(data: any) {

    return this.http.post(`${environment.apiUrl}home/addemptlk`, data, {
      headers: this.headers,
    });
  }
  addwhyus(data: any) {

    return this.http.post(`${environment.apiUrl}home/addwhyus`, data, {
      headers: this.headers,
    });
  }

  addaboutus(data: any) {

    return this.http.post(`${environment.apiUrl}home/addabtus`, data, {
      headers: this.headers,
    });
  }


  updatewhyinb(data: any) {

    return this.http.post(`${environment.apiUrl}home/updatewhyinb`, data, {
      headers: this.headers,
    });
  }

  addwhyinb(data: any) {

    return this.http.post(`${environment.apiUrl}home/addwhyinb`, data, {
      headers: this.headers,
    });
  }

  // app.post("/api/home/addtestimonials", homepage.addtestimonials);
  // app.post("/api/home/testimonials", homepage.tstmbyid);

  updateMenus(data: any) {

    return this.http.post(`${environment.apiUrl}home/updatemenudata`, data, {
      headers: this.headers,
    });
  }
  updateRctwrk(data: any) {

    return this.http.post(`${environment.apiUrl}rectwrks/updaterecentwroks`, data, {
      headers: this.headers,
    });
  }

  updateRctcat(data: any) {

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

    return this.http.post(`${environment.apiUrl}services/addservices`, data, {
      headers: this.headers,
    });
  }

  updateService(data: any) {

    return this.http.post(`${environment.apiUrl}services/updateservices`, data, {
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

    return this.http.post(`${environment.apiUrl}rectwrks/addcat`, data, {
      headers: this.headers,
    });
  }

  addMenuWithParent(data: any) {
    return this.http.post(`${environment.apiUrl}home/addmenu`, data, {
      headers: this.headers,
    });
  }

  addHighlights(data: any) {
    return this.http.post(`${environment.apiUrl}services/addserviceshtls`, data, {
      headers: this.headers,
    });
  }
}