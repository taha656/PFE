import { Component, OnInit } from '@angular/core';
import {AuthentificaionService} from "../authentificaion.service";
import {Router} from "@angular/router";
import {AuthentificationComponent} from "../authentification/authentification.component";

@Component({
  selector: 'app-oubli-un',
  templateUrl: './oubli-un.component.html',
  styleUrls: ['./oubli-un.component.css']
})
export class OubliUnComponent implements OnInit {
  oubli:number=0;
  constructor(private authentificationService:AuthentificaionService, private  router:Router , private  authentificationComponent:AuthentificationComponent) { }

  ngOnInit() {
  }


  codeGeneration(codeGenerer: number){
    this.authentificationService.testConfirmationEmail(codeGenerer) .subscribe((data :any)=> {

      console.log(data);
      this.authentificationComponent.oubli=2;
       // this.router.navigateByUrl('/oubliDeux');
      },
      err => {

      console.log(window.alert("le code de generation n'est pas correcte "))
      console.log("wari haja");
      console.log(err);
    })

  }

}
