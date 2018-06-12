import { Component, OnInit } from '@angular/core';
import {AuthentificaionService} from "../authentificaion.service";
import {CollaborateurModel} from "../Model/CollaborateurModel";
import {Router} from "@angular/router";
import {AuthentificationComponent} from "../authentification/authentification.component";

@Component({
  selector: 'app-oubli-deux',
  templateUrl: './oubli-deux.component.html',
  styleUrls: ['./oubli-deux.component.css']
})
export class OubliDeuxComponent implements OnInit {
  collaborateur:CollaborateurModel= new CollaborateurModel();
  oubli:number=0;
  constructor(private authentificationService:AuthentificaionService ,  private router:Router  , private  authentificationComponent:AuthentificationComponent) { }

  ngOnInit() {
  }

  nouveauMotDePasse(collaborateur){


    this.authentificationService.NouveauMotDePasse(collaborateur)  .subscribe((data :any)=> {
      this.collaborateur=data;
      this.authentificationComponent.oubli=0;
    //  this.router.navigateByUrl('/oubliZero');
      console.log(data);

      console.log(this.oubli);
      this.oubli=0;
    }, err => {

      console.log(window.alert("les mots de passe ne sont pas coherants "))
      console.log("wari haja");
      console.log(err);
    })
  }

}
