import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {HttpHeaders} from '@angular/common/http';
import {CollaborateurModel} from "./Model/CollaborateurModel";
import {AuthentificaionService} from "./authentificaion.service";
import {JwtHelper} from "angular2-jwt";
@Injectable()
export class CollaborateurService {

  private jwtToken=null;

  constructor(public http:Http,public authentifiactionService:AuthentificaionService) { }
  saveCol(collaborateur : CollaborateurModel){
    return this.http.post("http://localhost:3036/collaborateurs/create",collaborateur);

  }
  loadToken(){
    this.jwtToken=localStorage.getItem('token');

  }

  getAllCollaborateurs(){
    return this.http.get("http://localhost:3036/collaborateurs") .map(resp=>resp.json());
  }

  saveToken(jwt:string){
    this.jwtToken=jwt;

    localStorage.setItem('token',jwt);
    // localStorage.setItem('currentUser',jwt);
  }
  updateUser(collaborateurs: any): any {
    this.authentifiactionService.edit();
    return this.http.put("http://localhost:3036/collaborateurs/update2/"+this.authentifiactionService.getUser(),collaborateurs) .map(resp=>resp);


  }
  EditCol(collaborateurs){
    this.authentifiactionService.edit();
    return this.http.put("http://localhost:3036/collaborateurs/"+this.authentifiactionService.getUser(),collaborateurs) .map(resp=>resp);

  }
  supprimerCompte(a){
    return this.http.delete("http://localhost:3036/collaborateur/"+a) .map(resp=>resp);
  }
}
