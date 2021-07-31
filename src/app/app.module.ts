import {
  CommonModule,
  HashLocationStrategy,
  LocationStrategy,
} from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppFooterModule,
  AppHeaderModule,
  AppSidebarModule,
} from "@coreui/angular";
import {
  IconModule,
  IconSetModule,
  IconSetService,
} from "@coreui/icons-angular";
import { ChartsModule } from "ng2-charts";
// Import 3rd party components
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { TabsModule } from "ngx-bootstrap/tabs";
import {
  PerfectScrollbarConfigInterface,
  PerfectScrollbarModule,
} from "ngx-perfect-scrollbar";
import { AppComponent } from "./app.component";
// Import routing module
import { AppRoutingModule } from "./app.routing";
// Import containers
import { DefaultLayoutComponent } from "./containers";
import { AddcareerComponent } from "./views/addcareer/addcareer.component";
import { addServicesComponent } from "./views/addservice/addservice.component";
import { recentWorksComponent } from "./views/rcntwrk/rcntwrks.component";
import { CareerComponent } from "./views/careers/careers.component";
import { ContactusComponent } from "./views/contactus/contactus.component";
import { ServicesComponent } from "./views/services/services.component";
import { P404Component } from "./views/error/404.component";
import { P500Component } from "./views/error/500.component";
import { LoginComponent } from "./views/login/login.component";
import { MenuComponent } from "./views/menu/menu.component";
import { RegisterComponent } from "./views/register/register.component";
import { addContactusComponent } from "./views/addcontactus/addcontactus.component";
import { TableComponent } from "./views/table/table.component";
import { recentWorkcatComponent } from "./views/recentworkscategory/recentworkscat.component";
import { rctwrkcatgoryaddComponent } from "./views/rctwrkcatgoryadd/rctwrkcatgoryadd.component";
import { rctwrksaddComponent } from "./views/recentworksadd/recentworksadd.component";
import { AddMenuComponent } from './views/menu/add-menu/add-menu.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { AddImagesComponent } from './views/services/add-images/add-images.component';
import { HighlightsComponent } from './views/services/highlights/highlights.component';
import {homeSliderComponent} from "./views/home/homeSlider/homeslider.component";
import {addHomeSliderComponent} from "./views/home/addhomesliderimages/addhomeslider.component";
import { AngularEditorModule } from '@kolkov/angular-editor';
import {StaticComponent} from "./views/staticdata/staticdata.component";
import {testimonialsComponent} from "./views/testimonials/testimonials.component";
import {addtestimoialsComponent} from "./views/testimonials/addtestimonials/addtestimoials.component";
import {addTopImagesComponent} from "./views/home/addtopimages/addtopimages.component";
import {whyinbComponent} from "./views/whyinb/whyinb.component";
import {addwhyinbComponent} from "./views/whyinb/addwhyinb/addwhyinb.component";

import {whyusComponent} from "./views/whyUs/whyus.component";
import {addwhyusComponent} from "./views/whyUs/addwhyus/addwhyus.component";

import {emptlkComponent} from "./views/emptlk/emptlk.component";
import {addemptlkComponent} from "./views/emptlk/addemptlk/addemptlk.component";
import {topImagesComponent} from "./views/home/topimages/topimages.component";



const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};

const APP_CONTAINERS = [DefaultLayoutComponent];

@NgModule({
  imports: [
    MatSlideToggleModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    IconModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    IconSetModule.forRoot(),
    HttpClientModule,
     AngularEditorModule 
    
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,
    MenuComponent,
    CareerComponent,
    TableComponent,
    AddcareerComponent,
    addServicesComponent,
    ServicesComponent,
    addContactusComponent,
    ContactusComponent,
    recentWorksComponent,
    recentWorkcatComponent,
    rctwrkcatgoryaddComponent,
    rctwrksaddComponent,
    AddMenuComponent,
    AddImagesComponent,
    HighlightsComponent,
    StaticComponent,
    testimonialsComponent,
    addtestimoialsComponent,
    whyinbComponent,
    addwhyinbComponent,
    whyusComponent,
    addwhyusComponent,
    emptlkComponent,
    addemptlkComponent,
    homeSliderComponent,
    addHomeSliderComponent,
    addTopImagesComponent,
    topImagesComponent
  ],
  exports:[
MatSlideToggleModule
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
    IconSetService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
