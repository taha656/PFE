import { Component, OnInit } from '@angular/core';
import {PublicationService} from "../publication.service";
import {AuthentificaionService} from "../authentificaion.service";
import {Router} from "@angular/router";
import {FormUpload2Component} from "../form-upload2/form-upload2.component";

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {
  listPublication:any;
  constructor(public formUpload2:FormUpload2Component, private publicationService:PublicationService,private authentificationService:AuthentificaionService, private router:Router) { }

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

  formatFileSrc = file => `data:${file.mimeType};base64,${file.data}`;

}
