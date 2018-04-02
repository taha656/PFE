import { Component, OnInit } from '@angular/core';
import {PublicationModel} from "../Model/PublicationModel";
import "rxjs/add/operator/map";
import {PublicationService} from "../publication.service";
import {Http} from "@angular/http";
import {Router} from "@angular/router";
import { Observable } from 'rxjs/Observable';
import {AuthentificaionService} from "../authentificaion.service";
import {AuthentificationComponent} from "../authentification/authentification.component";
import {CollaborateurModel} from "../Model/CollaborateurModel";

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css'],

})
export class PublicationComponent implements OnInit {
  p: number = 1;
  collection: any[];
  publication:PublicationModel= new PublicationModel();
  collaborateur:CollaborateurModel;
 coll:any;
 im:any;
  pagePublication:any;
  commentPublication:any;
  constructor(public publicationService:PublicationService,private authenticationService:AuthentificaionService ,public router:Router/*,public authentificationComponent:AuthentificationComponent*/) { }

  ngOnInit() {

    this.reloadData();
    this.p=1;
  }
  savePublication(){


      this.authenticationService.savePub(this.publication)
        .subscribe((data :any)=> {
          this.publication=data
          this.reloadData();
          this.p=1;
        }, err => {
          console.log(err);
        })

  }
  onEditProfil(){
    this.router.navigateByUrl('/editProfile');
    window.location.reload();
  }
  reloadData() {
    this.authenticationService.getPublicationList().subscribe(data =>{ this.pagePublication = data;
console.log("oui");
this.reloadData2();
     this. CommentData();
this.reloadProfilePhoto();

//console.log(this.authentificationComponent.username);
  }, err=>{
 this.authenticationService.logout();
  this.router.navigateByUrl('/login');
  window.location.reload();
  console.log("non");
});


  }
  CommentData() {
    this.authenticationService.getCommentList().subscribe(data =>{ this.commentPublication = data;
      console.log("oui");

//console.log(this.authentificationComponent.username);
    }, err=>{

      console.log("non");
    });


  }

  reloadData2() {
    this.authenticationService.getCol().subscribe(data =>{ this.coll = data;
      console.log("oui");
//console.log(this.authentificationComponent.username);
    }, err=>{

      console.log("non");
    });


  }

  reloadProfilePhoto() {
    this.authenticationService.getProfilPhoto().subscribe(data =>{ this.im = data;
      console.log("oui");
//console.log(this.authentificationComponent.username);
    }, err=>{
    /*  this.authenticationService.logout();
      this.router.navigateByUrl('/login');
      window.location.reload();*/
      console.log(err);
    });


  }

  onLogout(){
    this.authenticationService.logout();

    this.router.navigateByUrl('/login');
    window.location.reload();
  }
}
