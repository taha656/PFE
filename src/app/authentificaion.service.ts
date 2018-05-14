import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PublicationModel} from "./Model/PublicationModel";
import {HttpHeaders} from '@angular/common/http';
import {CollaborateurModel} from "./Model/CollaborateurModel";
import {JwtHelper} from "angular2-jwt";
import { Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import {CommentModel} from "./Model/CommentModel";
import {AuthentificationComponent} from "./authentification/authentification.component";
@Injectable()
export class AuthentificaionService {
private host:string="http://localhost:3036";
private jwtToken=null;
private jwtTokenId;
  public col:any;
  private roles:Array<any>=[];
  private sub:any;
  private collaborateur:any;
  private idC:string="";
  public a:string;
  private commentaire:any;
  authentificationComponent:AuthentificationComponent;
  constructor(private http:HttpClient ) {
//this.collaborateur.id="5aaa81f0b7d40c19dcccbe96";
  }



  login(collaborateur){

localStorage.setItem('email',collaborateur.valueOf().email);

    return this.http.post(this.host+"/login",collaborateur,{observe:'response', responseType: "text"}).map(resp=>resp);

   // this.idC=this.collaborateur.id;


  }

  SaveId(myId : string){
   return localStorage.setItem('myId',myId);

  }
  SaveIdCourant(myIdCourant :string ){
    return localStorage.setItem('myIdCourant',myIdCourant )
  }
  GetId(){
    return localStorage.getItem('myId');
  }
  GetIdCourant(){
    return localStorage.getItem('myIdCourant');
  }
  getUser(){
   return localStorage.getItem('email');
  }
  getUserOublie(){
    return localStorage.getItem('emailOubli');
  }

isAdmin(){
    for(let r of this.roles){
      if(r.authority=='ADMIN') return true;
    }
    return false;
 // this.sub.authenticateAs("","");
}

  getCol() {
    // add authorization header with jwt token

    if(this.jwtToken==null)this.loadToken();
    return this.http.get("http://localhost:3036/collaborateurs/5ad0d0588b1e481498d80c9e",{headers: new HttpHeaders({'Authorization':this.jwtToken })});

  }

  getCollaborateur() {
    if(this.jwtToken==null)this.loadToken();
    //this.ab=this.GetIdCourant();
    return this.http.get("http://localhost:3036/collaborateurs/email/"+this.getUser(),{headers: new HttpHeaders({'Authorization':this.jwtToken })});

  }

  getCollaborateurOubli() {
    if(this.jwtToken==null)this.loadToken();
    this.a=this.getUserOublie();
    return this.http.get("http://localhost:3036/collaborateur/"+this.a,{headers: new HttpHeaders({'Authorization':this.jwtToken })});

  }



  getProfilPhoto() {
    // add authorization header with jwt token

    if(this.jwtToken==null)this.loadToken();
    return this.http.get("http://localhost:3036/image/imagex").map(resp=>resp);

  }

  getCommentList(idPublication){
    if(this.jwtToken==null)this.loadToken();
    return this.http.get("http://localhost:3036/commentaires/"+idPublication,{headers: new HttpHeaders({'Authorization':this.jwtToken })});
  }




  saveToken(jwt:string){
  this.jwtToken=jwt;

    localStorage.setItem('token',jwt);
   // localStorage.setItem('currentUser',jwt);
    let jwtHelper=new JwtHelper();
  this.roles=jwtHelper.decodeToken(this.jwtToken).roles;
  }

  loadToken(){
    this.jwtToken=localStorage.getItem('token');

  }

  edit(){
    if(this.jwtToken==null) this.loadToken();

      }




  saveCom(commentaire : CommentModel,idpublication:string){
    if(this.jwtToken==null)this.loadToken();
    return this.http.post("http://localhost:3036/commentaire/affecter/"+idpublication+"/"+this.getUser(),commentaire)
      .map(resp=>resp);
  }

  updateCom(commentaire : CommentModel,idpublication:string){
    if(this.jwtToken==null)this.loadToken();
    return this.http.post("http://localhost:3036/commentaire/affecter2/"+idpublication+"/"+this.getUser(),commentaire)
      .map(resp=>resp);
  }



  getPublicationList(){
    if(this.jwtToken==null)this.loadToken();
    return this.http.get("http://localhost:3036/publication",{headers: new HttpHeaders({'Authorization':this.jwtToken })});

  }

  getMyPublicationList(){
    if(this.jwtToken==null)this.loadToken();
    return this.http.get("http://localhost:3036/publication/"+this.getUser(),{headers: new HttpHeaders({'Authorization':this.jwtToken })});

  }
  getProfilPublicationList(a){

    return this.http.get("http://localhost:3036/publication/"+a);
  }

  pwdOublier(emailOubli){
    localStorage.setItem('emailOubli',emailOubli);
    return this.http.get("http://localhost:3036/oubliermdp/"+emailOubli).map(resp=>resp);
  }

  testConfirmationEmail(codeGenerer){
  return this.http.get("http://localhost:3036/verificationCode/"+codeGenerer+"/"+this.GetId());
  }

  NouveauMotDePasse(collaborateur){
   if(collaborateur.valueOf().password==collaborateur.valueOf().confirmationMotDePasse)
    return this.http.post("http://localhost:3036/nouveauMotDePasse/"+this.GetId(),collaborateur);
   else  console.log(window.alert("le code de generation n'est pas correcte "));
  }

  logout(){
    this.jwtToken=null;
    localStorage.removeItem('token');
  }




}

