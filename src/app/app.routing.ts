import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
// Import Containers
import { DefaultLayoutComponent } from "./containers";
import { AddcareerComponent } from "./views/addcareer/addcareer.component";
import { CareerComponent } from "./views/careers/careers.component";
import { P404Component } from "./views/error/404.component";
import { P500Component } from "./views/error/500.component";
import { HomeComponent } from "./views/home/home.component";
import { LoginComponent } from "./views/login/login.component";
import { MenuComponent } from "./views/menu/menu.component";
import { addServicesComponent } from "./views/addservice/addservice.component";
import { ServicesComponent } from "./views/services/services.component";
import { RegisterComponent } from "./views/register/register.component";
import { ContactusComponent } from "./views/contactus/contactus.component";
import { addContactusComponent } from "./views/addcontactus/addcontactus.component";
import { recentWorkcatComponent } from "./views/recentworkscategory/recentworkscat.component";
import { rctwrkcatgoryaddComponent } from "./views/rctwrkcatgoryadd/rctwrkcatgoryadd.component";
import { recentWorksComponent } from "./views/rcntwrk/rcntwrks.component";
import { rctwrksaddComponent } from "./views/recentworksadd/recentworksadd.component"
import { AddMenuComponent } from "./views/menu/add-menu/add-menu.component";
import { AddImagesComponent } from "./views/services/add-images/add-images.component";
import { HighlightsComponent } from "./views/services/highlights/highlights.component";
import { homeSliderComponent } from "./views/home/homeSlider/homeslider.component";
import { addHomeSliderComponent } from "./views/home/addhomesliderimages/addhomeslider.component";
import { addtopImagesComponent } from "./views/home/addtopimages/addtopimages.component";
import { topImagesComponent } from "./views/home/topimages/topimages.component";
import { StaticComponent } from "./views/staticdata/staticdata.component";
import { testimonialsComponent } from "./views/testimonials/testimonials.component";
import { addtestimoialsComponent } from "./views/testimonials/addtestimonials/addtestimoials.component";
import { whyinbComponent } from "./views/whyinb/whyinb.component";
import { addwhyinbComponent } from "./views/whyinb/addwhyinb/addwhyinb.component";
import { whyusComponent } from "./views/WhyUS/whyus.component";
import { addwhyusComponent } from "./views/WhyUS/addwhyus/addwhyus.component";
import { whatwedoCounterComponent } from "./views/home/whatwedoCounter/whatwedocounter.component";
import { addwhatwedocounterComponent } from "./views/home/whatwedoCounter/addwhatwedocounter/addwhatwedocounter.component";
import { aboutusComponent } from "./views/aboutus/aboutus.component";
import { addaboutusComponent } from "./views/aboutus/addaboutus/addaboutus.component";

//import {addstaticComponent} from "./views/staticdata/addstaticdata.component";
import { emptlkComponent } from "./views/emptlk/emptlk.component";
import { addemptlkComponent } from "./views/emptlk/addemptlk/addemptlk.component";
export const routes: Routes = [
  {
    path: "",
    component: LoginComponent,
    data: {
      title: "Login Page",
    },
  },
  {
    path: "404",
    component: P404Component,
    data: {
      title: "Page 404",
    },
  },
  {
    path: "500",
    component: P500Component,
    data: {
      title: "Page 500",
    },
  },

  {
    path: "login",
    component: LoginComponent,
    data: {
      title: "Login Page",
    },
  },
  {
    path: "register",
    component: RegisterComponent,
    data: {
      title: "Register Page",
    },
  },
  {
    path: "",
    component: DefaultLayoutComponent,
    data: {
      title: "Home",
    },
    children: [
      {
        path: "menu",
        component: MenuComponent,
      },
      {
        path: "home",
        component: HomeComponent,
      },
      {
        path: "careers",
        component: CareerComponent,
      },
      {
        path: "services",
        component: ServicesComponent,
      },
      {
        path: "testimonials",
        component: testimonialsComponent,
      },
      {
        path: "addtestimonials",
        component: addtestimoialsComponent,
      },
      {
        path: "testimonials",
        component: testimonialsComponent,
      },
      {
        path: "emptlk",
        component: emptlkComponent,
      },
      {
        path: "addemptlk",
        component: addemptlkComponent,
      },
      {
        path: "whyus",
        component: whyusComponent,
      },
      {
        path: "addwhyus",
        component: addwhyusComponent,
      },
      {
        path: "addwhyinb",
        component: addwhyinbComponent,
      },
      {
        path: "whyinnobox",
        component: whyinbComponent,
      },
      {
        path: "home-data",
        component: StaticComponent,
      },
      {
        path: "add-services",
        component: addServicesComponent,
      },
      {
        path: "add-career",
        component: AddcareerComponent,
      },
      {
        path: "edit-career",
        component: AddcareerComponent,
      },
      {
        path: "recentworkscat",
        component: recentWorkcatComponent,
      },
      {
        path: "recentworks",
        component: recentWorksComponent,
      },
      {
        path: "add-recentworks",
        component: rctwrksaddComponent,
      },
      {
        path: "edit-recentworks",
        component: rctwrksaddComponent,
      },
      {
        path: "contactus",
        component: ContactusComponent,
      },
      {
        path: "add-contactus",
        component: addContactusComponent,
      },
      {
        path: "edit-contactus",
        component: addContactusComponent,
      },
      {
        path: "inbox",
        component: HomeComponent,
      },
      {
        path: "add-recentworkcat",
        component: rctwrkcatgoryaddComponent,
      },
      {
        path: "edit-recentworkcat",
        component: rctwrkcatgoryaddComponent,
      },
      {
        path: "add-menu",
        component: AddMenuComponent,
      },
      {
        path: "edit-menu",
        component: AddMenuComponent,
      },
      {
        path: "add-image",
        component: AddImagesComponent,
      },
      {
        path: "highlight",
        component: HighlightsComponent,
      },
      {
        path: "homeslider",
        component: homeSliderComponent,
      },
      {
        path: "addtopimages",
        component: addtopImagesComponent,
      },
      {
        path: "topimages",
        component: topImagesComponent,
      },
      {
        path: "add-homeslider",
        component: addHomeSliderComponent,
      },
      {
        path: "whatwedocounter",
        component: whatwedoCounterComponent,
      },
      {
        path: "edit-staticdata",
        component: addwhatwedocounterComponent,
      },
      {
        path: "aboutus",
        component: aboutusComponent,
      },
      {
        path: "addaboutus",
        component: addaboutusComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
