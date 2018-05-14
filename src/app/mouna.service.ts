import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
@Injectable()
export class MounaService {

  constructor(public http:Http) { }
  getMouna(){

    return this.http.get("http://localhost:3036/publication");

  }
}
