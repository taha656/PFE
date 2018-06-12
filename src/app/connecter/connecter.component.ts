import { Component, OnInit } from '@angular/core';
import {CollaborateurService} from "../collaborateur.service";
import {PublicationComponent} from "../publication/publication.component";

@Component({
  selector: 'app-connecter',
  templateUrl: './connecter.component.html',
  styleUrls: ['./connecter.component.css']
})
export class ConnecterComponent implements OnInit {
  col: any;
  ligne: number=0;

  constructor(private collaborateurService: CollaborateurService , public pC:PublicationComponent) {

  }

  ngOnInit() {
    this.getAllCollaborateurs();

  }

  getAllCollaborateurs() {

    //  this.authenticationService.getCollaborateur().subscribe(data =>{ this.coll = data;});
    this.collaborateurService.getAllCollaborateurs()
.subscribe(data1 => {
  this.col = data1;
  console.log("oui");

//this. CommentData();


//console.log(this.authentificationComponent.username);
}, err => {

  console.log("non");
});


}

all(){
   this.ligne=0;
}

on(){
  this.ligne=1;
}
off(){
  this.ligne=2;
}


}
