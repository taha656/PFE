import { Component, OnInit } from '@angular/core';
import {CollaborateurModel} from "../Model/CollaborateurModel";
import {EditProfilComponent} from "../edit-profil/edit-profil.component";
import {AuthentificaionService} from "../authentificaion.service";

@Component({
  selector: 'app-modifier-col',
  templateUrl: './modifier-col.component.html',
  styleUrls: ['./modifier-col.component.css']
})
export class ModifierColComponent implements OnInit {
  coll:CollaborateurModel= new CollaborateurModel();

  constructor(private editComponent:EditProfilComponent, private authenticationService:AuthentificaionService) { }

  ngOnInit() {
    this.GetCollaborateur();

  }

  editColl(){
    console.log('ena houni');
    this.editComponent.mode=2;


  }

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

}
