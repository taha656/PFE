import { Component, OnInit } from '@angular/core';
import {PublicationModel} from "../Model/PublicationModel";
import "rxjs/add/operator/map";
import {PublicationService} from "../publication.service";
import {Http} from "@angular/http";
import {Router} from "@angular/router";
import { Observable } from 'rxjs/Observable';
import {AuthentificaionService} from "../authentificaion.service";
import swal from 'sweetalert2';
import {CollaborateurModel} from "../Model/CollaborateurModel";
import {CommentModel} from "../Model/CommentModel";

import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import * as $ from 'jquery';
import {NotificationService} from "../notification.service";
import {FormUpload2Component} from "../form-upload2/form-upload2.component";
import {MyPublicationComponent} from "../my-publication/my-publication.component";




@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css'],

})
export class PublicationComponent implements OnInit {
d:any;

  p:number=0;
  rev:any;
  idp:String;
  publication:any;

  collaborateur:any;
like :any=false;




 modif:number=0;
 seeCimments:number=0;

   likePublications:any;
  pagePublication:any;
  commentPublication:any;
  commentaire: CommentModel= new CommentModel();
  constructor( public formUpload2:FormUpload2Component, public publicationService:PublicationService,private authenticationService:AuthentificaionService,public router:Router) {
    this.reloadData();
    this.reloadlike();
  }

  ngOnInit() {




  }




  sharePublication(publication){
    this.publicationService.sharePublicationService(publication).subscribe((data :any)=> {
      this.publication=data
      this.reloadData();

    }, err => {
      console.log(err);
    })

  }
  likePublication(c){
    this.publicationService.likePublicationService(c.id).subscribe((data :any)=> {
      this.publication=data
      this.reloadlike();

    }, err => {
      console.log(err);
    })

  }

  unlikePublication(l){
    this.publicationService.unlikePublicationService(l).subscribe((data :any)=> {
      this.publication=data
      this.reloadlike();

    }, err => {
      console.log(err);
    })

  }

  changerModeModif(){
    this.modif=1;
  }

  wesh(d){
    return Array.from(d);
  }

  supprimerPublication(idDeletePublication){
    swal({
      title: 'Etes vous sure de vouloir supprimer ?',
      text: "la publicaion sera perdue!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'oui supprimer!'
    }).then((result) => {
      if (result.value) {

        this.publicationService.SupprimerPublication(idDeletePublication) .subscribe((data :any)=> {
          this.publication=data

          this.reloadData();

          swal(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }, err => {
          swal({
            title: 'Vous ne pouvez pas supprimer cette publication car elle ne vous appartient pas',
            text: "voulez vous la signalez aupres de l'administrateur?",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'oui signaler!'
          }).then((result) => {
            if (result.value) {
              this.envoiS(idDeletePublication);
              swal(
                'Signaled!',
                'la publication a bien été signalée',
                'success'
              )
            }
          })

            console.log("je suis ici");


        })

      }
    })







  }

  envoiS(idDeletePublication){
    this.publicationService.envoieSignal(idDeletePublication) .subscribe((data :any)=> {
      this.publication=data



    }, err => {
      // window.location.reload();

    })

  }
  DeleteCommentaire(idDeleteCommentaire){
  this.publicationService.SupprimerCommentaire(idDeleteCommentaire) .subscribe((data :any)=> {
  this.commentaire=data


    this.reloadData();
}, err => {
   // window.location.reload();
    this.reloadData();
})
}



  saveCom(idPublication){


    this.authenticationService.saveCom(this.commentaire,idPublication)
      .subscribe((data :any)=> {
       this.commentaire=data

        this.reloadData();
        this.commentaire.textCom=null;
      }, err => {
        console.log(err);
      })

  }

  updateCom(idPublication){
    this.authenticationService.updateCom(this.commentaire,idPublication)
      .subscribe((data :any)=> {
        this.commentaire=data
        this.reloadData();
      }, err => {
        console.log(err);
      })
  }

  onSeeComments(){
this.seeCimments=1;
  }


  reloadData() {

    this.authenticationService.getPublicationList().subscribe(data1 =>{ this.pagePublication = data1;
this.rev=this.pagePublication.reverse();

  }, err=>{
 this.authenticationService.logout();
  this.router.navigateByUrl('/login');
 // window.location.reload();
  console.log("non");
});


  }

  reloadlike() {

    this.publicationService.getPublicationLike().subscribe(data1 =>{ this.likePublications = data1;
      console.log(data1);

    }, err=>{
      this.authenticationService.logout();
      this.router.navigateByUrl('/login');
      // window.location.reload();
      console.log(err);
    });


  }

  eventt(){
    this.router.navigateByUrl('/scheduler');
  }

  CommentData() {

    this.authenticationService.getCommentList(this.idp).subscribe(data =>{ this.commentPublication = data;
      console.log("grgrgr");
this.reloadData();
    }, err=>{

      console.log("non");
    });


  }

  formatFileSrc = file => `data:${file.mimeType};base64,${file.data}`;




}
