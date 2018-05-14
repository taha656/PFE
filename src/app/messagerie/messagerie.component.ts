import { Component, OnInit, Input } from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import * as $ from 'jquery';
import {Http} from "@angular/http";
import {Router} from "@angular/router";
import {CollaborateurService} from "../collaborateur.service";
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
  col:any;
  public messages:any[]=[];
  constructor( public router:Router,public http:Http , public collaborateurService:CollaborateurService ){
    this. stompClient = this.connect();
    let that = this;
    this.stompClient.connect({}, function(frame) {
      that.stompClient.subscribe("/queue/chat", message => {

        if(message.body) {
          this.messages=(message.body);
          console.log("karima"+this.messages);

      //    console.log(message.body);
        //  console.log(localStorage.getItem('input'));
        //  console.log(localStorage.getItem('lastInput'));
          this.msg=localStorage.getItem('input');
        /*  if (((this.message).texte)==this.msg){*/
            $(".panel-body").append("<p>"+this.messages+"</p>")
       /*   }else{
            $(".right-chat").append("<p _ngcontent-c9>"+(this.message).texte+"</p>")
          }*/
          localStorage.setItem('lastInput', this.msg);

        }
      });
    });

  }

  ngOnInit(){
    this.getAllCollaborateurs();
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
    this.stompClient.send("/app/send/message", {}, message);
    $('#input').val('');
  }


  open_chat(event): void{
    if (this.test=="main-section"){
      this.test="main-section open-more";
    }
    else{
      this.test="main-section"
    }

  }

  getAllCollaborateurs() {

    //  this.authenticationService.getCollaborateur().subscribe(data =>{ this.coll = data;});
    this.collaborateurService.getAllCollaborateurs().subscribe(data1 =>{ this.col = data1;
      console.log("oui");

//this. CommentData();


//console.log(this.authentificationComponent.username);
    }, err=>{

      console.log("non");
    });


  }
}
