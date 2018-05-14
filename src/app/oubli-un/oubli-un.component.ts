import { Component, OnInit } from '@angular/core';
import {AuthentificaionService} from "../authentificaion.service";

@Component({
  selector: 'app-oubli-un',
  templateUrl: './oubli-un.component.html',
  styleUrls: ['./oubli-un.component.css']
})
export class OubliUnComponent implements OnInit {
  oubli:number=0;
  constructor(private authentificationService:AuthentificaionService) { }

  ngOnInit() {
  }


  codeGeneration(codeGenerer:string){
    this.authentificationService.testConfirmationEmail(codeGenerer) .subscribe((data :any)=> {

      console.log(data);  this.oubli=2; }, err => {

      console.log(window.alert("le code de generation n'est pas correcte "))
      console.log("wari haja");
      console.log(err);
    })

  }

}
