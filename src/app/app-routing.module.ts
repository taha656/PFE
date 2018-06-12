
import { EditProfilComponent } from './edit-profil/edit-profil.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationComponent } from './authentification/authentification.component';
import { PublicationComponent } from './publication/publication.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {SavePublicationServiceService} from "./save-publication-service.service";
import {PublicationService} from "./publication.service";
import {NotificationService} from "./notification.service";
import {NgxPaginationModule} from 'ngx-pagination';
import {CollaborateurService} from "./collaborateur.service";

import {AuthentificaionService} from "./authentificaion.service";
import {HttpModule} from "@angular/http";
import { NavbarComponent } from './navbar/navbar.component';
import { AddPublicationComponent } from './add-publication/add-publication.component';
import { RegisterComponent } from './register/register.component';
import { OubliZeroComponent } from './oubli-zero/oubli-zero.component';
import { OubliUnComponent } from './oubli-un/oubli-un.component';
import { OubliDeuxComponent } from './oubli-deux/oubli-deux.component';
import { Consulter2Component } from './consulter2/consulter2.component';
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
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: AuthentificationComponent },

  { path: 'editProfile', component: EditProfilComponent },
  { path: 'publication', component: PublicationComponent,  },
  { path: 'modifierColDeux', component: ModifierColDeuxComponent },
  { path: 'scheduler', component: SchedulerComponent },
  { path: 'admin', component: AdministrateurComponent },
  { path: 'consulterProfil', component: ConsulterProfilComponent },
  { path: 'nbLikes', component: NbLikesComponent },
  { path: 'messagerie', component: MessagerieComponent },
  { path: 'publicationsSignale', component: PublicationSignaleComponent },
  { path: 'oubliUn', component:  OubliUnComponent },
  { path: 'oubliDeux', component:  OubliDeuxComponent },
  { path: 'oubliZero', component:  OubliZeroComponent },
  { path: 'consulter2/:email', component: Consulter2Component }


];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

