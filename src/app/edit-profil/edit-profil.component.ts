import { Component, OnInit } from '@angular/core';
import {AuthentificaionService} from "../authentificaion.service";
import {Router} from "@angular/router";
import {CollaborateurService} from "../collaborateur.service";
import {CollaborateurModel} from "../Model/CollaborateurModel";
import {NavbarComponent} from "../navbar/navbar.component";
import {ModifierColDeuxComponent} from "../modifier-col-deux/modifier-col-deux.component";
@Component({
  selector: 'app-edit-profil',
  templateUrl: './edit-profil.component.html',
  styleUrls: ['./edit-profil.component.css']
})
export class EditProfilComponent implements OnInit {
 mode:number=1;
coll:any;


  constructor( private authenticationService:AuthentificaionService, public router:Router, private collaborateurService:CollaborateurService, public navbarComponent:NavbarComponent) { }

  ngOnInit() {
this.GetCollaborateur();

  }
  formatFileSrc = file => `data:${file.mimeType};base64,${file.data}`;

  GetCollaborateur(){
    this.authenticationService.getCollaborateur().subscribe((data:any) =>{ this.coll = data;
      console.log(data);
      //  console.log(window.alert(this.coll.id));
      this.authenticationService.SaveIdCourant(this.coll.id);
//console.log(this.authentificationComponent.username);
    }, err=>{

      console.log(err);
    });
  }

  logout(){
    this.navbarComponent.onLogout();
  }






}
