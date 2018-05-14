import { Component, OnInit } from '@angular/core';
import {PublicationModel} from "../Model/PublicationModel";
import "rxjs/add/operator/map";
import {PublicationService} from "../publication.service";
import {Http} from "@angular/http";
import {Router} from "@angular/router";
import { Observable } from 'rxjs/Observable';
import {AuthentificaionService} from "../authentificaion.service";

import {CollaborateurModel} from "../Model/CollaborateurModel";
import {CommentModel} from "../Model/CommentModel";

import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import * as $ from 'jquery';
import {NotificationService} from "../notification.service";


var SockJs = require("sockjs-client");
var Stomp = require("stompjs");


@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css'],

})
export class PublicationComponent implements OnInit {
d:any;
  nbNotifications:number=0;
  public notification : any ;
  public notifications:string[]=[];
  p:number=0;
  rev:any;
  idpub:String;
  idp:String;
  publication:any;
  idPublication:string;
  collaborateur:CollaborateurModel;
like :any=false;
test:string="azi";
 id:string;

 modif:number=0;
 seeCimments:number=0;

   likePublications:any;
  pagePublication:any;
  commentPublication:any;
  commentaire: CommentModel= new CommentModel();
  constructor(public publicationService:PublicationService,private authenticationService:AuthentificaionService ,public router:Router) {

    let stompClient = this.connect();
    stompClient.connect({}, frame => {

      // Subscribe to notification topic
      stompClient.subscribe('/topic/notification', notifications => {

        // Update notifications attribute with the recent messsage sent from the server
        this.notification=JSON.parse(notifications.body);
        /*  if (notifications.body){
         this.notificationService.AddNotificationToUser(this.notification, "administrateur").subscribe((data)=>{data;
         });
         }*/
        this.notifications.push(this.notification );
        console.log(this.notifications);
        this.nbNotifications+=1;
        console.log(this.nbNotifications);


      })
    });
  }

  ngOnInit() {

    this.reloadData();

  }

  connect() {
    let socket = new SockJs(`http://localhost:3036/socket`);

    let stompClient = Stomp.over(socket);

    return stompClient;
  }

  getCount(){
    return this.nbNotifications;

  }

  resetNotifications(){
    this.nbNotifications=0;
    // this.notifications=[];
  }



  sharePublication(publication){
    this.publicationService.sharePublicationService(publication).subscribe((data :any)=> {
      this.publication=data
      this.reloadData();
      //this.reloadData();
      //   window.location.reload();

      // this.p=1;
    }, err => {
      console.log(err);
    })

  }
  likePublication(c){
    this.publicationService.likePublicationService(c.id).subscribe((data :any)=> {
      this.publication=data
      this.reloadData();
      //this.reloadData();
      //   window.location.reload();

      // this.p=1;
    }, err => {
      console.log(err);
    })

  }

  unlikePublication(l){
    this.publicationService.unlikePublicationService(l).subscribe((data :any)=> {
      this.publication=data
      this.reloadData();
      //this.reloadData();
      //   window.location.reload();

      // this.p=1;
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

  supprimerPublication(idDeletePublication: string){
    if(confirm("Are you sure to delete "+name)) {

    this.publicationService.SupprimerPublication(idDeletePublication) .subscribe((data :any)=> {
      this.publication=data
     // window.location.reload();
      this.reloadData();

    }, err => {
      console.log(err);
    })


    }

  }
  DeleteCommentaire(idDeleteCommentaire){
  this.publicationService.SupprimerCommentaire(idDeleteCommentaire) .subscribe((data :any)=> {
  this.commentaire=data
  //window.location.reload();


}, err => {
   // window.location.reload();
    this.reloadData();
})
}



  saveCom(idPublication){


    this.authenticationService.saveCom(this.commentaire,idPublication)
      .subscribe((data :any)=> {
        this.commentaire=data
       // window.location.reload();
        this.reloadData();

      }, err => {
        console.log(err);
      })

  }

  updateCom(idPublication){
    this.authenticationService.updateCom(this.commentaire,idPublication)
      .subscribe((data :any)=> {
        this.commentaire=data
      //  window.location.reload();
        this.reloadData();
      }, err => {
        console.log(err);
      })
  }

  onSeeComments(){
this.seeCimments=1;
  }


  reloadData() {

  //  this.authenticationService.getCollaborateur().subscribe(data =>{ this.coll = data;});
    this.authenticationService.getPublicationList().subscribe(data1 =>{ this.pagePublication = data1;
console.log("oui");
this.rev=this.pagePublication.reverse();
//this. CommentData();
this.reloadlike();

//console.log(this.authentificationComponent.username);
  }, err=>{
 this.authenticationService.logout();
  this.router.navigateByUrl('/login');
 // window.location.reload();
  console.log("non");
});


  }

  reloadlike() {

    //  this.authenticationService.getCollaborateur().subscribe(data =>{ this.coll = data;});
    this.publicationService.getPublicationLike().subscribe(data1 =>{ this.likePublications = data1;
      console.log(data1);

//this. CommentData();


//console.log(this.authentificationComponent.username);
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

//console.log(this.authentificationComponent.username);
    }, err=>{

      console.log("non");
    });


  }






}
