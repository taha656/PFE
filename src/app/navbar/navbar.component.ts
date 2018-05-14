import { Component, OnInit } from '@angular/core';
import {AuthentificaionService} from "../authentificaion.service";
import {Router} from "@angular/router";

import {PublicationModel} from "../Model/PublicationModel";
import "rxjs/add/operator/map";
import {PublicationService} from "../publication.service";
import {Http} from "@angular/http";

import { Observable } from 'rxjs/Observable';


import {CollaborateurModel} from "../Model/CollaborateurModel";
import {CommentModel} from "../Model/CommentModel";

import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import * as $ from 'jquery';
import {NotificationService} from "../notification.service";


var SockJs = require("sockjs-client");
var Stomp = require("stompjs");


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  coll:any;
  user:any;
  im:any;
  nbNotifications:number=0;
  public notification : any ;
  public notifications:string[]=[];
  constructor(private authenticationService:AuthentificaionService,public router:Router) {
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
   this.getUser();
   this.collab();
   // this.reloadProfilePhoto();
  }

  collab(){
    this.authenticationService.getCollaborateur().subscribe((data :any)=> {
      this.user=data

      //this.reloadData();
      //   window.location.reload();

      // this.p=1;
    }, err => {
      console.log(err);
    })

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

getUser(){
    this.coll=this.authenticationService.getUser();
}
  onLogout(){
    this.authenticationService.logout();

    this.router.navigateByUrl('/login');
    window.location.reload();
  }

  reloadProfilePhoto() {
    this.im=   this.authenticationService.getProfilPhoto();
    console.log("oui");
//console.log(this.authentificationComponent.username);



  }

  onEditProfil(){
    this.router.navigateByUrl('/editProfile');
  //  window.location.reload();
  }

  inbox(){
    this.router.navigateByUrl('/messagerie');
    //window.location.reload();

  }
  formatFileSrc = file => `data:${file.mimeType};base64,${file.data}`;


}
