import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {AuthentificationComponent} from "../authentification/authentification.component";
import {AuthentificaionService} from "../authentificaion.service";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import {EditProfilComponent} from "../edit-profil/edit-profil.component";
import {FormUpload2Component} from "../form-upload2/form-upload2.component";
@Component({
  selector: 'app-consulter2',
  templateUrl: './consulter2.component.html',
  styleUrls: ['./consulter2.component.css']
})
export class Consulter2Component implements OnInit {
col:any;
  coll:any;
  useremail:any;
  constructor(private editProfil:EditProfilComponent, private route: ActivatedRoute,
               private router: Router , private authenticationService:AuthentificaionService, public formUpload2:FormUpload2Component) { }

  ngOnInit() {
  /*  this.route.params
    // (+) converts string 'id' to a number
      .switchMap((params: Params) => this.authenticationService.getProfilPublicationList(+params['email']))
      .subscribe(data1 => {
        this.col = data1;
        console.log(data1);*/
    this.GetCollaborateur();
       this.route.params
          .map(params => params['email'])
          .switchMap(email => this.authenticationService.getProfilPublicationList(email))
          .subscribe(program => this.col = program) ;



//this. CommentData();


//console.log(this.authentificationComponent.username);

  }

  logout(){
    this.editProfil.logout();
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

  publcation(){
    this.editProfil.publcation();
  }

}
