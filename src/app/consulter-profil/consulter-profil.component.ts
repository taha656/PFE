import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import {Router} from "@angular/router";
import {TableauAdminComponent} from "../tableau-admin/tableau-admin.component";
import {AuthentificaionService} from "../authentificaion.service";
import {CollaborateurService} from "../collaborateur.service";

@Component({
  selector: 'app-consulter-profil',
  templateUrl: './consulter-profil.component.html',
  styleUrls: ['./consulter-profil.component.css']
})
export class ConsulterProfilComponent implements OnInit {
user:string;
  ProfilpagePublication:any;
  constructor(private collaborateurService:CollaborateurService, private http:Http, public router:Router, private tableauAdminComponent:TableauAdminComponent, private authenticationService:AuthentificaionService) { }

  ngOnInit() {

this.reloadData();
  }

  reloadData() {

    this.authenticationService.getProfilPublicationList(this.tableauAdminComponent.getProfil()).subscribe(data1 =>{ this.ProfilpagePublication = data1;
      console.log("oui");


//console.log(this.authentificationComponent.username);
    }, err=>{
      //  this.authenticationService.logout();
      //  this.router.navigateByUrl('/login');
      // window.location.reload();
      console.log(err);
    });


  }

  supprimerCompte(){
    this.collaborateurService.supprimerCompte(this.tableauAdminComponent.getProfil())  .subscribe(
      data => {
        console.log(data);

      },
      error => console.log('ERROR: ' + error));
  }


  }




