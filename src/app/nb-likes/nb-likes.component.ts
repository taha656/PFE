import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthentificaionService} from "../authentificaion.service";
import {PublicationService} from "../publication.service";

@Component({
  selector: 'app-nb-likes',
  templateUrl: './nb-likes.component.html',
  styleUrls: ['./nb-likes.component.css']
})
export class NbLikesComponent implements OnInit {
listPublication:any;
  constructor(public router:Router, public authentificationService:AuthentificaionService, private publicationService:PublicationService) { }

  ngOnInit() {

  }






}
