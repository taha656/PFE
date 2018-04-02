import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import {Router} from "@angular/router";
import {CollaborateurModel} from "../Model/CollaborateurModel";
import {CollaborateurService} from "../collaborateur.service";
import {AuthentificaionService} from "../authentificaion.service";

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {
 username:any="";
mode:number=0;
public user:CollaborateurModel;
collaborateur:CollaborateurModel= new CollaborateurModel();
  constructor(public http:Http, public router:Router , public collaborateurService:CollaborateurService,private authentificationService:AuthentificaionService) { }

  ngOnInit() {
  //  let token =this.authentificationService.loadToken();
   // if(token)
    //  this.router.navigateByUrl('/publication');

      }
  onLogin(collabrateur) {
    console.log(collabrateur.valueOf().email);
  // this.username=collabrateur.valueOf().email;
this.authentificationService.login(collabrateur)
  .subscribe(resp=> {
let jwt=resp.headers.get('Authorization');
      console.log(resp.headers.get('Authorization'));

    this.authentificationService.saveToken(jwt);


   this.router.navigateByUrl('/publication');
    window.location.reload();
   //

      //this.router.navigate(['/publication']);

    console.log("reussi");

  },
  err=>{
this.mode=1;

    console.log(err);
  })
}



  saveRegistration(email:string){


    this.collaborateurService.saveCol(this.collaborateur)
      .subscribe((data :any)=> {
        this.collaborateur=data

      }, err => {
        console.log(err);
      })

  }



  }
