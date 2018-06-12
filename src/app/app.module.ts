import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { VirtualScrollModule } from 'angular2-virtual-scroll';
import swal from 'sweetalert2';

import { AppComponent } from './app.component';







import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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

import { AdministrateurComponent } from './administrateur/administrateur.component';
import { TableauAdminComponent } from './tableau-admin/tableau-admin.component';
import { ConsulterProfilComponent } from './consulter-profil/consulter-profil.component';
import { LikeComponent } from './like/like.component';

import { NbLikesComponent } from './nb-likes/nb-likes.component';
import { TemplateAdmintopComponent } from './template-admintop/template-admintop.component';
import { MessagerieComponent } from './messagerie/messagerie.component';
import { FormUploadComponent } from './form-upload/form-upload.component';
import { FormUpload2Component } from './form-upload2/form-upload2.component';
import { PublicationSignaleComponent } from './publication-signale/publication-signale.component';
import { ConnecterComponent } from './connecter/connecter.component';
import { Consulter2Component } from './consulter2/consulter2.component';
import { LikesComponent } from './likes/likes.component';
import { FormUpload3Component } from './form-upload3/form-upload3.component';
import { FormUpload4Component } from './form-upload4/form-upload4.component';
import { ChartsModule } from 'ng2-charts';


const appRoutes: Routes = [


];


@NgModule({
  declarations: [
    AppComponent,

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
    AdministrateurComponent,
    TableauAdminComponent,
    ConsulterProfilComponent,
    LikeComponent,

    NbLikesComponent,
    TemplateAdmintopComponent,
    MessagerieComponent,
    FormUploadComponent,
    FormUpload2Component,
    PublicationSignaleComponent,
    ConnecterComponent,
    Consulter2Component,
    LikesComponent,
    FormUpload3Component,
    FormUpload4Component,



  ],

  imports: [
    BrowserModule,
    NgxPaginationModule,
    FormsModule,
    ChartsModule,
    AppRoutingModule,
    VirtualScrollModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpModule,

    //RouterModule.forRoot(appRoutes)
  ],
  providers: [MyPublicationComponent,FormUpload2Component,FormUpload3Component, LikesComponent, NotificationService,NbLikesComponent,PublicationSignaleComponent,PublicationService,CollaborateurService,AuthentificaionService,SavePublicationServiceService,ModifierColDeuxComponent,ModifierColComponent,EditProfilComponent,PublicationComponent,EventService,TableauAdminComponent,NavbarComponent],

  bootstrap: [AppComponent]
})

export class AppModule { }
