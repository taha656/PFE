import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import {Router} from "@angular/router";
import {CollaborateurModel} from "../Model/CollaborateurModel";
import {CollaborateurService} from "../collaborateur.service";
import {AuthentificaionService} from "../authentificaion.service";

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {
 username:any="";
  erreurDinsription:number=0;
  msg:any;
  oubli:number=0;
  monCode:any;
public email:string="";
mode:number=0;
public user:CollaborateurModel;
c:any;
collaborateur:CollaborateurModel= new CollaborateurModel();
  constructor(public http:Http, public router:Router , public collaborateurService:CollaborateurService,private authentificationService:AuthentificaionService) { }

  ngOnInit() {

      }










  }
