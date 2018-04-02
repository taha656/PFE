import { Component, OnInit } from '@angular/core';
import {AuthentificaionService} from "../authentificaion.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-edit-profil',
  templateUrl: './edit-profil.component.html',
  styleUrls: ['./edit-profil.component.css']
})
export class EditProfilComponent implements OnInit {
 mode:number=1;
 coll:any;
  constructor(private authenticationService:AuthentificaionService, public router:Router) { }

  ngOnInit() {
    this.authenticationService.getCol().subscribe(data =>{ this.coll = data;
      console.log("oui");
//console.log(this.authentificationComponent.username);
    }, err=>{

      console.log("non");
    });
  }
  ModifCol(){

    this.authenticationService.EditCol(this.coll).subscribe(data =>{ this.coll = data;
      console.log('oui2');
//console.log(this.authentificationComponent.username);
    }, err=>{

      console.log("non");
    });
    this.mode=1;
  }
  editCol(){
    console.log('oui');
    this.mode=2;


  }

}
