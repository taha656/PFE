import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import * as $ from 'jquery';
import {NotificationService} from "../notification.service";
import {PublicationService} from "../publication.service";
import {PublicationComponent} from "../publication/publication.component";
import {NbLikesComponent} from "../nb-likes/nb-likes.component";
import {PublicationSignaleComponent} from "../publication-signale/publication-signale.component";
import {LikesComponent} from "../likes/likes.component";
import {AuthentificaionService} from "../authentificaion.service";
var SockJs = require("sockjs-client");
var Stomp = require("stompjs");
@Component({
  selector: 'app-template-admintop',
  templateUrl: './template-admintop.component.html',
  styleUrls: ['./template-admintop.component.css']
})
export class TemplateAdmintopComponent implements OnInit {
  nbNotifications:number=0;
  public notification : any ;
  collAdmin:any;

  public notifications:string[]=[];
public det:string="a aimé votre publication";
  constructor(public authenticationService:AuthentificaionService, public nb:LikesComponent,public si:PublicationSignaleComponent, public router:Router, private notificationService:NotificationService, public publicationService:PublicationService,public publicationComponent:PublicationComponent) {
this.getUser();

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

  }
  ref(){
this.nb.voirPubLike();
this.si.publicationSignaler();
  }

  connect() {
    let socket = new SockJs(`http://localhost:3036/socket`);

    let stompClient = Stomp.over(socket);

    return stompClient;
  }

  getCount(){
    return this.nbNotifications;

  }

  waa(){
    this.nbNotifications=0;
  }

  resetNotifications(){
    this.nbNotifications=0;
    // this.notifications=[];
  }

  getUser(){
    this.collAdmin=this.authenticationService.getUser();
    console.log(this.collAdmin);
  }





}
