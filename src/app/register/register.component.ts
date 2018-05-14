import { Component, OnInit } from '@angular/core';
import {CollaborateurModel} from "../Model/CollaborateurModel";
import {CollaborateurService} from "../collaborateur.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  collaborateur:CollaborateurModel= new CollaborateurModel;
  erreurDinsription:number=0;
  constructor(private collaborateurService:CollaborateurService) { }

  ngOnInit() {
  }

  saveRegistration(collaborateur){


    this.collaborateurService.saveCol(collaborateur)
      .subscribe((data :any)=> {
        this.collaborateur=data;
        console.log(data);

      }, err => {
        //   this.msg = err.error.message ;
        this.erreurDinsription=1;
        console.log("wari haja");
        console.log(err);
      })

  }

}
