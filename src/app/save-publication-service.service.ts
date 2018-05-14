import { Injectable } from '@angular/core';
import {PublicationModel} from "./Model/PublicationModel";
import {HttpClient} from "@angular/common/http";
import {AuthentificaionService} from "./authentificaion.service";


import {Http} from "@angular/http";
import {PublicationComponent} from "./publication/publication.component";

import {headersToString} from "selenium-webdriver/http";
import {CollaborateurModel} from "./Model/CollaborateurModel";
import {AuthentificationComponent} from "./authentification/authentification.component";
@Injectable()
export class SavePublicationServiceService {

  constructor(private http:HttpClient, private authentificationService:AuthentificaionService) { }



  savePub(publication : any): any{
    // this.collaborateur=this.authentificationService.getCollaborateur(this.authentificationComponent.email);
    // this.collaborateur.id="5ac2438cb7d40c36149fc413";
    //  this.collaborateur.email="azri";
    //this.a=this.getUser();
    return this.http.post("http://localhost:3036/publication/create/"+this.authentificationService.getUser(),publication)
      .map(resp=>resp);
  }
}
