import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthentificaionService} from "../authentificaion.service";
import {PublicationService} from "../publication.service";

@Component({
  selector: 'app-nb-likes',
  templateUrl: './nb-likes.component.html',
  styleUrls: ['./nb-likes.component.css']
})
export class NbLikesComponent implements OnInit {
listPublication:any;
  constructor(public router:Router, public authentificationService:AuthentificaionService, private publicationService:PublicationService) { }

  ngOnInit() {
    this.voirPubLike();
  }

  voirPubLike() {

    //  this.authenticationService.getCollaborateur().subscribe(data =>{ this.coll = data;});
    this.publicationService.voirPubLike().subscribe((data1:any) =>{ this.listPublication = data1;
      console.log("oui");

    }, err=>{
      this.authentificationService.logout();
      this.router.navigateByUrl('/login');
      // window.location.reload();
      console.log("non");
    });


  }

  consulterProfil(a){
    localStorage.setItem("consulterProfil",a);
    this.router.navigateByUrl('/consulterProfil')
    //  console.log(this.getProfil());
  }
  getProfil(){

    return  localStorage.getItem("consulterProfil");

  }
  publicationParJaime(){
    this.router.navigateByUrl('/nbLikes');
  }

}
