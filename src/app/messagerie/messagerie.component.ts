import { Component, OnInit, Input } from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import * as $ from 'jquery';
import {Http} from "@angular/http";
import {Router} from "@angular/router";
import {CollaborateurService} from "../collaborateur.service";
import {AuthentificaionService} from "../authentificaion.service";
import {MessagerieModel} from "../Model/MessagerieModel";
var SockJs = require("sockjs-client");
var Stomp = require("stompjs");

@Component({
  selector: 'app-messagerie',
  templateUrl: './messagerie.component.html',
  styleUrls: ['./messagerie.component.css']
})
export class MessagerieComponent implements OnInit {

  public test= "main-section";
  private stompClient;
  private msg="" ;

  mail:string;
 public messagerie: MessagerieModel;
  user:any;
  public messages:any[]=[];
   message:MessagerieModel;
  collImg:any;
  constructor( public router:Router,public http:Http , public collaborateurService:CollaborateurService, public authentificationService:AuthentificaionService ){
/*
    this. stompClient = this.connect();
    let that = this;
    this.stompClient.connect({}, (frame) => {
      that.stompClient.subscribe("/queue/chat/"+this.authentificationService.getUser(), message => {

        if(message.body) {
          this.messages=(message.body);
          console.log("karima"+this.messages);

          }
            //    console.log(message.body);
        //  console.log(localStorage.getItem('input'));
        //  console.log(localStorage.getItem('lastInput'));
          this.msg=localStorage.getItem('input');
        /!*  if (((this.message).texte)==this.msg){*!/
            $(".panel-body").append("<div class='media'> <div class='media-left'> <a href='#'> <img src='assets/images/balsamiq.png' width='60' alt='woman' class='img-rounded media-object'> </a> </div> <div class='media-body message'> <div class='panel panel-default'> <div class='panel-heading panel-heading-white'> <div class='pull-right'> <small class='text-muted'>2 min ago</small> </div> <a href='#'></a> </div><p>"+this.messages+"</p></div> </div> </div>")
       /!*   }else{
            $(".right-chat").append("<p _ngcontent-c9>"+(this.message).texte+"</p>")
          }*!/
          localStorage.setItem('lastInput', this.msg);


      });
    });
*/

  }

  ngOnInit(){
    this.socketInitialisation(this.authentificationService.getUser());
this.GetCollaborateur();
  }

  GetCollaborateur(){
    this.authentificationService.getCollaborateur().subscribe((data:any) =>{ this.collImg = data;
      console.log(this.collImg);
      //  console.log(window.alert(this.coll.id));

//console.log(this.authentificationComponent.username);
    }, err=>{

      console.log(err);
    });
  }

  socketInitialisation(username){
    this. stompClient = this.connect();
    let that = this;
    this.stompClient.connect({}, function(frame) {
      //console.log(uuid);
      that.stompClient.subscribe("/queue/chat/"+username, message => {

        if(message.body) {
          this.message=JSON.parse(message.body);
          //console.log(message.body);
          //console.log(localStorage.getItem('input'));
          //console.log(localStorage.getItem('lastInput'));
          this.msg=localStorage.getItem('input');

       //   console.log("dsds"+this.message.texte);
this.GetCollaborateur;
          //  if (((this.message).texte)==this.msg){
          $(".panel-body").append("<div class='media'> <div class='media-left'><a  [routerLink]='[/consulter2, "+this.message.collaborateur.email+"]'>  "+this.message.collaborateur.prenom+"    </a> </div> <div class='media-body message'> <div class='panel panel-default'> <div class='panel-heading panel-heading-white'>"+this.message.collaborateur.email+" <div class='pull-right'> <small class='text-muted'>few secondes ago</span></small> </div> <a href='#'></a> </div><p>"+this.message.texte+"</p></div> </div> </div>")

          //  }else.{
          //  $(".right-chat").append("<p _ngcontent-c9>"+(this.message).texte+"</p>")
          //  }
          localStorage.setItem('lastInput', this.msg);// <form-upload4 [user]="+this.collImg+"></form-upload4>
        }
      });
    });
  }






  ngOnDestroy() {
    this.stompClient.disconnect({}, function(frame) {});
  }

  getMsg(){
    return this.messages;

  }

  connect() {
    let socket = new SockJs('http://localhost:3036/socket');
    let stompClient = Stomp.over(socket);
    return stompClient;
  }


  sendMessage(message){
    localStorage.setItem('input', message);
    this.stompClient.send("/app/send/message/"+this.authentificationService.getUser(), {}, message);
    $("#input").val('salut les amis');
    message=null;
    console.log("rrrrrrrrrrrrrrrrrrrr"+this.collImg)
  }


  open_chat(event): void{
    if (this.test=="main-section"){
      this.test="main-section open-more";
    }
    else{
      this.test="main-section"
    }

  }

  formatFileSrc = file => `data:${file.mimeType};base64,${file.data}`;
}
