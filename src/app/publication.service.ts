import { Injectable } from '@angular/core';
import {PublicationModel} from "./Model/PublicationModel";
import {Http} from "@angular/http";
import {PublicationComponent} from "./publication/publication.component";
import {AuthentificaionService} from "./authentificaion.service";
import {headersToString} from "selenium-webdriver/http";

@Injectable()
export class PublicationService {

  constructor(public http:Http) { }
  savePub(publication : PublicationModel){
    return this.http.post("http://localhost:3036/publication/create",publication)
      .map(resp=>resp);
  }
  getPublicationList(){

    return this.http.get("http://localhost:3036/publication")
      .map(resp=>resp.json());
  }

}
