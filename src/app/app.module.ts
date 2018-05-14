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
import {SavePublicationServiceService} from "./save-publication-service.service";
import {PublicationService} from "./publication.service";
import {NotificationService} from "./notification.service";
import {NgxPaginationModule} from 'ngx-pagination';
import {CollaborateurService} from "./collaborateur.service";
import { EditProfilComponent } from './edit-profil/edit-profil.component';
import {AuthentificaionService} from "./authentificaion.service";
import {HttpModule} from "@angular/http";
import { NavbarComponent } from './navbar/navbar.component';
import { AddPublicationComponent } from './add-publication/add-publication.component';
import { RegisterComponent } from './register/register.component';
import { OubliZeroComponent } from './oubli-zero/oubli-zero.component';
import { OubliUnComponent } from './oubli-un/oubli-un.component';
import { OubliDeuxComponent } from './oubli-deux/oubli-deux.component';

import { ModifierColComponent } from './modifier-col/modifier-col.component';
import { ModifierColDeuxComponent } from './modifier-col-deux/modifier-col-deux.component';
import { MyPublicationComponent } from './my-publication/my-publication.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import {EventService} from "./scheduler/event.service";
import { ListteDesReglesComponent } from './listte-des-regles/listte-des-regles.component';
import { AdministrateurComponent } from './administrateur/administrateur.component';
import { TableauAdminComponent } from './tableau-admin/tableau-admin.component';
import { ConsulterProfilComponent } from './consulter-profil/consulter-profil.component';
import { LikeComponent } from './like/like.component';
import { UnlikeComponent } from './unlike/unlike.component';
import { ShareComponent } from './share/share.component';
import { NbLikesComponent } from './nb-likes/nb-likes.component';
import { TemplateAdmintopComponent } from './template-admintop/template-admintop.component';
import { MessagerieComponent } from './messagerie/messagerie.component';
import { FormUploadComponent } from './form-upload/form-upload.component';
import { FormUpload2Component } from './form-upload2/form-upload2.component';



const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: AuthentificationComponent },
  { path: 'customers', component: CustomersListComponent },
  { path: 'editProfile', component: EditProfilComponent },
  { path: 'publication', component: PublicationComponent },
  { path: 'publication', component: PublicationComponent },
  { path: 'scheduler', component: SchedulerComponent },
  { path: 'admin', component: AdministrateurComponent },
  { path: 'consulterProfil', component: ConsulterProfilComponent },
  { path: 'nbLikes', component: NbLikesComponent },
  { path: 'messagerie', component: MessagerieComponent },

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
    NavbarComponent,
    AddPublicationComponent,
    RegisterComponent,
    OubliZeroComponent,
    OubliUnComponent,
    OubliDeuxComponent,

    ModifierColComponent,
    ModifierColDeuxComponent,
    MyPublicationComponent,
    SchedulerComponent,
    ListteDesReglesComponent,
    AdministrateurComponent,
    TableauAdminComponent,
    ConsulterProfilComponent,
    LikeComponent,
    UnlikeComponent,
    ShareComponent,
    NbLikesComponent,
    TemplateAdmintopComponent,
    MessagerieComponent,
    FormUploadComponent,
    FormUpload2Component,



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
  providers: [NotificationService,PublicationService,CustomerService,CollaborateurService,AuthentificaionService,SavePublicationServiceService,NavbarComponent,ModifierColDeuxComponent,ModifierColComponent,EditProfilComponent,PublicationComponent,EventService,TableauAdminComponent],

  bootstrap: [AppComponent]
})

export class AppModule { }
