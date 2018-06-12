import { Component, OnInit } from '@angular/core';
import {AuthentificaionService} from "../authentificaion.service";
import {Router} from "@angular/router";
import {CollaborateurModel} from "../Model/CollaborateurModel";
import {AuthentificationComponent} from "../authentification/authentification.component";
import swal from 'sweetalert2'
@Component({
  selector: 'app-oubli-zero',
  templateUrl: './oubli-zero.component.html',
  styleUrls: ['./oubli-zero.component.css']
})
export class OubliZeroComponent implements OnInit {
  collaborateur:CollaborateurModel= new CollaborateurModel();
  oubli:number=0;
  erreurDinsription:number=0;
  user:any;
  constructor(public authentificationService:AuthentificaionService,public router:Router , private  authentificationComponent:AuthentificationComponent) { }

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
 // window.location.reload();
}
  else {
  this.router.navigateByUrl('/publication');

}

        },
        err=>{

          swal({
            type: 'error',
            title: 'Oops...',
            text: 'mot de passe ou email invalide !',
            footer: '<a href></a>',
          })
          console.log(err);
        })
  }


  pwdOublie(emailOubli:string){
    this.oubli=1;
    console.log(emailOubli);
   this.authentificationComponent.oubli=1;
   // this.router.navigateByUrl('/oubliUn');
    this.authentificationService.pwdOublier(emailOubli)  .subscribe((data :any)=> {
      console.log(data);
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
