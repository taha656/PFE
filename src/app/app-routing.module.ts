import { CreateCustomerComponent } from './customers/create-customer/create-customer.component';
import { CustomersListComponent } from './customers/customers-list/customers-list.component';
import { EditProfilComponent } from './edit-profil/edit-profil.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationComponent } from './authentification/authentification.component';
import { PublicationComponent } from './publication/publication.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import {AuthentificaionService} from "./authentificaion.service";

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: AuthentificationComponent },
  { path: 'customers', component: CustomersListComponent },

  { path: 'scheduler', component: SchedulerComponent },

  { path: 'publication', component: PublicationComponent },
  { path: 'editProfile', component: EditProfilComponent },
  { path: 'add', component: CreateCustomerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

