import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PublicationModel} from "./Model/PublicationModel";
import {HttpHeaders} from '@angular/common/http';
import {CollaborateurModel} from "./Model/CollaborateurModel";
import {JwtHelper} from "angular2-jwt";
import { Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
@Injectable()
export class AuthentificaionService {
private host:string="http://localhost:3036";
private jwtToken=null;
  public col:any;
  private roles:Array<any>=[];
  private sub:any;
  private collaborateur:CollaborateurModel;
  private idC:string="";
  public a:any;
  constructor(private http:HttpClient ) {
//this.collaborateur.id="5aaa81f0b7d40c19dcccbe96";
  }



  login(collaborateur){

    return this.http.post(this.host+"/login",collaborateur,{observe:'response', responseType: "text"});

   // this.idC=this.collaborateur.id;


  }
isAdmin(){
 // this.sub.authenticateAs("","");
}

  getCol() {
    // add authorization header with jwt token

    if(this.jwtToken==null)this.loadToken();
    return this.http.get("http://localhost:3036/collaborateurs/5abe72e7b7d40c43e88a2869",{headers: new HttpHeaders({'Authorization':this.jwtToken })});

  }
  EditCol(collaborateur){
    if(this.jwtToken==null)this.loadToken();
    return this.http.put("http://localhost:3036/collaborateurs/"+collaborateur.id,collaborateur,{headers: new HttpHeaders({'Authorization':this.jwtToken })});

  }
  getProfilPhoto() {
    // add authorization header with jwt token

    if(this.jwtToken==null)this.loadToken();
    return this.http.get("http://localhost:3036/image",{headers: new HttpHeaders({'Authorization':this.jwtToken }) });

  }

  getCommentList(){
    if(this.jwtToken==null)this.loadToken();
    return this.http.get("http://localhost:3036/commentaire",{headers: new HttpHeaders({'Authorization':this.jwtToken })});
  }


  saveToken(jwt:string){
  this.jwtToken=jwt;

    localStorage.setItem('token',jwt);
   // localStorage.setItem('currentUser',jwt);
    //let jwtHelper=new JwtHelper();
  // this.collaborateur=jwtHelper.decodeToken(this.jwtToken).sub;
  }

  loadToken(){
    this.jwtToken=localStorage.getItem('token');
  // this.jwtToken=localStorage.getItem('currentUser');
  }
  edit(){
    if(this.jwtToken==null) this.loadToken();

      }
  savePub(publication : PublicationModel){
    if(this.jwtToken==null)this.loadToken();
    return this.http.post("http://localhost:3036/publication/create",publication)
      .map(resp=>resp);
  }
  getPublicationList(){
    if(this.jwtToken==null)this.loadToken();
    return this.http.get("http://localhost:3036/publication",{headers: new HttpHeaders({'Authorization':this.jwtToken })});

  }


  logout(){
    this.jwtToken=null;
    localStorage.removeItem('token');
  }



}

