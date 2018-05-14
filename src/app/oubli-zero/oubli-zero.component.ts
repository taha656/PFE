import { Component, OnInit } from '@angular/core';
import {AuthentificaionService} from "../authentificaion.service";
import {Router} from "@angular/router";
import {CollaborateurModel} from "../Model/CollaborateurModel";

@Component({
  selector: 'app-oubli-zero',
  templateUrl: './oubli-zero.component.html',
  styleUrls: ['./oubli-zero.component.css']
})
export class OubliZeroComponent implements OnInit {
  collaborateur:CollaborateurModel= new CollaborateurModel();
  oubli:number=0;
  erreurDinsription:number=0;
  constructor(private authentificationService:AuthentificaionService,private router:Router) { }

  ngOnInit() {
  }

  onLogin(collabrateur) {

    this.authentificationService.login(collabrateur)
      .subscribe((resp:any)=> {

          let jwt=resp.headers.get('Authorization');
          console.log(resp.headers.get('Authorization'));

          this.authentificationService.saveToken(jwt);
if(this.authentificationService.isAdmin()){
  this.router.navigateByUrl('/admin');

}
  else
  this.router.navigateByUrl('/publication');
        //  this.router.navigateByUrl('/publication');
        //  window.location.reload();


        },
        err=>{

          console.log(window.alert("Mot de passe ou email invalide erroné "))
          console.log(err);
        })
  }


  pwdOublie(emailOubli:string){
    this.oubli=1;
    console.log(emailOubli);
    this.authentificationService.pwdOublier(emailOubli)  .subscribe((data :any)=> {
      this.collaborateur=data;
      this.authentificationService.SaveId(this.collaborateur.id);
      console.log(data);

      console.log(this.oubli);

    }, err => {

      this.erreurDinsription=1;
      console.log("wari haja");
      console.log(err);
      console.log(window.alert("mochkel pwd oublie "))
    })
  }

}
