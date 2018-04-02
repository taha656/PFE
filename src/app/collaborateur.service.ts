import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

import {CollaborateurModel} from "./Model/CollaborateurModel";
import {AuthentificaionService} from "./authentificaion.service";
@Injectable()
export class CollaborateurService {


  constructor(public http:Http,public authentifiactionService:AuthentificaionService) { }
  saveCol(collaborateur : CollaborateurModel){
    return this.http.post("http://localhost:3036/collaborateurs/create",collaborateur)
      .map(resp=>resp);
  }


}
