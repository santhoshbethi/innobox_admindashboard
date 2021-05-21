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
import { ServicesComponent } from "./views/services/services.component";
import { RegisterComponent } from "./views/register/register.component";
import { ContactusComponent } from "./views/contactus/contactus.component";

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
        path: "add-career",
        component: AddcareerComponent,
      },
      {
        path: "recentworks",
        component: HomeComponent,
      },
      {
        path: "contactus",
        component: ContactusComponent,
      },
      {
        path: "inbox",
        component: HomeComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
