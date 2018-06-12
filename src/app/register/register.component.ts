import { Component, OnInit } from '@angular/core';
import {CollaborateurModel} from "../Model/CollaborateurModel";
import {CollaborateurService} from "../collaborateur.service";
import {parseHttpResponse} from "selenium-webdriver/http";
import {getResponseURL} from "@angular/http/src/http_utils";
import swal from 'sweetalert2'


import 'rxjs/add/operator/do';
import { error} from "util";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  collaborateur:CollaborateurModel= new CollaborateurModel;
  erreurDinsription:number=0;
  msg:any;
  constructor(private collaborateurService:CollaborateurService) { }

  ngOnInit() {
  }

  saveRegistration(collaborateur){


    this.collaborateurService.saveCol(collaborateur)
      .subscribe((data :any)=> {
        this.collaborateur=data;
        console.log("data"+data);

        swal({

          type: 'success',
          title: 'Bienvenue ' +collaborateur.nom,
          showConfirmButton: false,
          timer: 2500
        })

      },err=> {

         // this.msg = err.message;
console.log(err);
//console.log(err.error.message);
        if(collaborateur.nom==""){
          this.msg="veuillez saisir votre nom";
          swal({
            type: 'error',
            title: 'Oops...',
            text: 'veuillez saisir votre nom',
            footer: '<a href></a>',
          })
        }
        else if(collaborateur.prenom==""){
          this.msg="veuillez saisir votre prenom";
          swal({
            type: 'error',
            title: 'Oops...',
            text: 'veuillez saisir votre prenom',
            footer: '<a href></a>',
          })
        }
      else  if(collaborateur.email==""){
          this.msg="veuillez saisir votre email";
          swal({
            type: 'error',
            title: 'Oops...',
            text: 'veuillez saisir votre email',
            footer: '<a href></a>',
          })
        }
       else if(collaborateur.password==""){
          this.msg="veuillez saisir votre password";
          swal({
            type: 'error',
            title: 'Oops...',
            text: 'veuillez saisir votre password',
            footer: '<a href></a>',
          })
        }
else if (!collaborateur.email.endsWith("@soprahr.com")){
        swal({
          type: 'error',
          title: 'Oops...',
          text: 'email invalid',
          footer: '<a href>email doit contenir @soprahr.com </a>',
        })}

        else
{
  swal({
    type: 'error',
    title: 'Oops...',
    text: 'cet utilisateur existe deja',
    footer: '<a href></a>',
  })}


        });

}}
