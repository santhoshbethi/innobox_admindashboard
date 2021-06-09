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
import {recentWorkcatComponent} from "./views/recentworkscategory/recentworkscat.component";
import {rctwrkcatgoryaddComponent} from "./views/rctwrkcatgoryadd/rctwrkcatgoryadd.component";
import {recentWorksComponent} from "./views/rcntwrk/rcntwrks.component";
 import {rctwrksaddComponent} from "./views/recentworksadd/recentworksadd.component"
import { AddMenuComponent } from "./views/menu/add-menu/add-menu.component";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full",
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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
