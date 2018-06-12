import { Component, OnInit } from '@angular/core';
import {CollaborateurModel} from "../Model/CollaborateurModel";
import {CollaborateurService} from "../collaborateur.service";
import {EditProfilComponent} from "../edit-profil/edit-profil.component";
import {ModifierColComponent} from "../modifier-col/modifier-col.component";
import {AuthentificaionService} from "../authentificaion.service";
import {NavbarComponent} from "../navbar/navbar.component";
import swal from 'sweetalert2'
@Component({
  selector: 'app-modifier-col-deux',
  templateUrl: './modifier-col-deux.component.html',
  styleUrls: ['./modifier-col-deux.component.css']
})
export class ModifierColDeuxComponent implements OnInit {
 coll:any;


  constructor(public navbarComponent:NavbarComponent,  private authenticationService:AuthentificaionService, private collaborateurService:CollaborateurService,private editProfilComponent:EditProfilComponent,private modifierColComponent:ModifierColComponent  ) { }

  ngOnInit() {
this.GetCollaborateur();
  }


  ModifCol(coll){

    this.collaborateurService.EditCol(coll).subscribe((data:any) =>{ this.coll = data;
      console.log(data);
      //  console.log(window.alert(this.authenticationService.GetIdCourant()));

      this.editProfilComponent.mode=1;
      swal({

        type: 'success',
        title: 'Votre profil a bien été modifier ! ',
        showConfirmButton: false,
        timer: 1500
      })
      window.location.reload();
    }, err=>{

      console.log(err);
    });

    //this.mode=1;

  }

  editCol(){
    console.log('oui');
    this.editProfilComponent.mode=1;



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
