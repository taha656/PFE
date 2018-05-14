import { Component, OnInit } from '@angular/core';
import {AuthentificaionService} from "../authentificaion.service";
import {CollaborateurModel} from "../Model/CollaborateurModel";

@Component({
  selector: 'app-oubli-deux',
  templateUrl: './oubli-deux.component.html',
  styleUrls: ['./oubli-deux.component.css']
})
export class OubliDeuxComponent implements OnInit {
  collaborateur:CollaborateurModel= new CollaborateurModel();
  oubli:number=0;
  constructor(private authentificationService:AuthentificaionService) { }

  ngOnInit() {
  }

  nouveauMotDePasse(collaborateur){


    this.authentificationService.NouveauMotDePasse(collaborateur)  .subscribe((data :any)=> {
      this.collaborateur=data;

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
