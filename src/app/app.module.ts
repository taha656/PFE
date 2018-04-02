import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { VirtualScrollModule } from 'angular2-virtual-scroll';


import { AppComponent } from './app.component';






import { CustomersListComponent } from './customers/customers-list/customers-list.component';
import { CustomerDetailsComponent } from './customers/customer-details/customer-details.component';
import { CreateCustomerComponent } from './customers/create-customer/create-customer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomerService } from './customers/customer.service';
import { AuthentificationComponent } from './authentification/authentification.component';
import { PublicationComponent } from './publication/publication.component';
import {RouterModule, Routes} from "@angular/router";

import {PublicationService} from "./publication.service";
import {NgxPaginationModule} from 'ngx-pagination';
import {CollaborateurService} from "./collaborateur.service";
import { EditProfilComponent } from './edit-profil/edit-profil.component';
import {AuthentificaionService} from "./authentificaion.service";
import {HttpModule} from "@angular/http";
const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: AuthentificationComponent },
  { path: 'customers', component: CustomersListComponent },
  { path: 'editProfile', component: EditProfilComponent },
  { path: 'publication', component: PublicationComponent },
  { path: 'add', component: CreateCustomerComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    CustomersListComponent,
    CustomerDetailsComponent,
    CreateCustomerComponent,
    AuthentificationComponent,
    PublicationComponent,
    EditProfilComponent,

  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    FormsModule,
    AppRoutingModule,
    VirtualScrollModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PublicationService,CustomerService,CollaborateurService,AuthentificaionService],

  bootstrap: [AppComponent]
})

export class AppModule { }
