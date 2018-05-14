
import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable }   from 'rxjs/Observable';
import { Response, Headers } from '@angular/http';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import * as $ from 'jquery';


var SockJs = require("sockjs-client");
var Stomp = require("stompjs");

var stompClient;

@Injectable()
export class NotificationService {
  private baseUrl:string='http://localhost:8180';
  private headers = new Headers({'Content-Type':'application/json'});
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  public notification : any ;
  public notifications : any=[];
  nbNotifications=0;
  constructor(private _http:HttpClient) {
  }


  AddNotificationToUser(notification:any, username:string){
    return this._http.post(this.baseUrl+'/collaborateur/addNotif/'+username,JSON.stringify(notification), this.httpOptions).map((response:Response)=>response)
      .catch(this.errorHandler);
  }

  getListNotificationsByUser(username: string){
    return this._http.post(this.baseUrl+'/notification/listNotifications/'+username, this.httpOptions).map((response:Response)=>response)
      .catch(this.errorHandler);
  }

  errorHandler(error:Response){
    return Observable.throw(error||"SERVER ERROR");
  }
}

