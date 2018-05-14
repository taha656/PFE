import { Injectable } from '@angular/core';
import {PublicationModel} from "./Model/PublicationModel";
import {Http} from "@angular/http";
import {PublicationComponent} from "./publication/publication.component";
import {AuthentificaionService} from "./authentificaion.service";
import {headersToString} from "selenium-webdriver/http";
import {CollaborateurModel} from "./Model/CollaborateurModel";
import {AuthentificationComponent} from "./authentification/authentification.component";
@Injectable()
export class PublicationService {
  authentificationComponent:AuthentificationComponent;
  em:string;
private collaborateur:any;
  constructor(public http:Http, private authentificationService:AuthentificaionService) { }

  getUser(){
    return this.http.get("http://localhost:3036/getuser",this.authentificationComponent.email)
      .map(resp=>resp.json());
  }
  sharePublicationService(publication){
    return this.http.post("http://localhost:3036/publication/share/"+this.authentificationService.getUser(),publication)
      .map(resp=>resp);
  }
  likePublicationService(idPublication){
    return this.http.get("http://localhost:3036/publication/like/"+idPublication+"/"+this.authentificationService.getUser())
      .map(resp=>resp);
  }
  unlikePublicationService(idlike){
    return this.http.delete("http://localhost:3036/publication/unlike/"+idlike)
      .map(resp=>resp);
  }
  SupprimerPublication(idSupprimerPublication) {

    return this.http.delete("http://localhost:3036/publication/"+idSupprimerPublication+"/"+this.authentificationService.getUser());
  }

  SupprimerCommentaire(idSupprimerCommentaire) {

    return this.http.delete("http://localhost:3036/commentaire/"+idSupprimerCommentaire+"/"+this.authentificationService.getUser());
  }


  gettriePublication(){


    return this.http.get("http://localhost:3036/publication/triePubUser") .map(resp=>resp.json());
  }
  voirPubLike(){
    return this.http.get("http://localhost:3036/publication/trierParLike") .map(resp=>resp.json());
  }
  getTotalPublication(){
    return this.http.get("http://localhost:3036/publication/totalPublications") .map(resp=>resp.json());
  }

  getPublicationLike(){
    return this.http.get("http://localhost:3036/publication/like/"+this.authentificationService.getUser()) .map(resp=>resp.json());
  }
}
