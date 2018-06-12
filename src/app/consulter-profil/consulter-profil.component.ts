import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import {Router} from "@angular/router";
import {TableauAdminComponent} from "../tableau-admin/tableau-admin.component";
import {AuthentificaionService} from "../authentificaion.service";
import {CollaborateurService} from "../collaborateur.service";
import {EditProfilComponent} from "../edit-profil/edit-profil.component";
import swal from 'sweetalert2'
import {FormUpload2Component} from "../form-upload2/form-upload2.component";
@Component({
  selector: 'app-consulter-profil',
  templateUrl: './consulter-profil.component.html',
  styleUrls: ['./consulter-profil.component.css']
})
export class ConsulterProfilComponent implements OnInit {
user:string;
  ProfilpagePublication:any;
  coll:any;
  constructor(public formUpload2:FormUpload2Component, private editProfil:EditProfilComponent, private collaborateurService:CollaborateurService, private http:Http, public router:Router, private tableauAdminComponent:TableauAdminComponent, private authenticationService:AuthentificaionService) { }

  ngOnInit() {

this.reloadData();
this.coll=this.editProfil.GetCollaborateur();
  }

  reloadData() {

    this.authenticationService.getProfilPublicationList(this.tableauAdminComponent.getProfil()).subscribe(data1 =>{ this.ProfilpagePublication = data1;
      console.log("oui");


//console.log(this.authentificationComponent.username);
    }, err=>{
    swal('Il semblerait que ce compte a été supprimer ou nexiste plus' )
      //  this.authenticationService.logout();
        this.router.navigateByUrl('/admin');
      // window.location.reload();
      console.log(err);
    });


  }

  supprimerCompte(){
    this.collaborateurService.supprimerCompte(this.tableauAdminComponent.getProfil())  .subscribe(
      data => {
        swal(
          'Deleted!',
          'le compte utilisateur a été supprimé',
          'success'
        )
        console.log(data);

      },
      error => console.log('ERROR: ' + error));
  }


  logout(){
    this.editProfil.logout();
  }

  publcation(){
    this.editProfil.publcation();
  }




  }




