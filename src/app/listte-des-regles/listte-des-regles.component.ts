import { Component, OnInit } from '@angular/core';
import {MounaService} from "../mouna.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-listte-des-regles',
  templateUrl: './listte-des-regles.component.html',
  styleUrls: ['./listte-des-regles.component.css']
})
export class ListteDesReglesComponent implements OnInit {
listRegle:any;
  constructor(public router:Router, private mounaService:MounaService) { }

  ngOnInit() {
  }

  reloadData() {

    //  this.authenticationService.getCollaborateur().subscribe(data =>{ this.coll = data;});
    this.mounaService.getMouna().subscribe(data1 =>{ this.listRegle = data1;
      console.log("oui");

//this. CommentData();


//console.log(this.authentificationComponent.username);
    }, err=>{

      console.log("non");
    });


  }

}
