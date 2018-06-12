import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {PublicationService} from "../publication.service";
import {AuthentificaionService} from "../authentificaion.service";
import {PublicationComponent} from "../publication/publication.component";
import swal from 'sweetalert2';
import {FormUpload2Component} from "../form-upload2/form-upload2.component";
@Component({
  selector: 'app-publication-signale',
  templateUrl: './publication-signale.component.html',
  styleUrls: ['./publication-signale.component.css']
})
export class PublicationSignaleComponent implements OnInit {
public listPublication:any;
  constructor( public formUpload2:FormUpload2Component, public publicationComponent:PublicationComponent, public router:Router, public publicationService:PublicationService, private authentificationService:AuthentificaionService) { }

  ngOnInit() {
    this.publicationSignaler();
  }
  publicationSignaler(){
    this.publicationService.getPublicationSignaler().subscribe((data1:any) =>{ this.listPublication = data1;
      console.log("oui");

    }, err=>{
      this.authentificationService.logout();
      this.router.navigateByUrl('/login');
      // window.location.reload();
      console.log("non");
    });

  }

  deletePublication(idPublication){
    this.publicationService.SupprimerPublication(idPublication).subscribe((data1:any) =>{ this.listPublication = data1;
 window.location.reload();
      swal(
        'Deleted!',
        'le post a été supprimé',
        'success'
      )

    }, err=>{

    });

  }

  ignorerPublication(idPublication){
    this.publicationService.ignorerPublication(idPublication).subscribe((data1:any) =>{ this.listPublication = data1;
     // window.location.reload();
console.log(data1);

    }, err=>{

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

}
