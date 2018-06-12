import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {PublicationService} from "../publication.service";
import {AuthentificaionService} from "../authentificaion.service";

@Component({
  selector: 'app-tableau-admin',
  templateUrl: './tableau-admin.component.html',
  styleUrls: ['./tableau-admin.component.css']
})
export class TableauAdminComponent implements OnInit {
public total:number;
 public list1:any;
 public totalL:number;
public totalS:number;
  constructor(public publicationService:PublicationService,public router:Router,private authenticationService:AuthentificaionService) { }

  ngOnInit() {
    this.reloadtrieUser();
    this.totalPub();

  }






  reloadtrieUser() {

    //  this.authenticationService.getCollaborateur().subscribe(data =>{ this.coll = data;});
    this.publicationService.gettriePublication().subscribe((data1:any) =>{ this.list1 = data1;
      console.log("oui");

    }, err=>{
      this.authenticationService.logout();
      this.router.navigateByUrl('/login');
      // window.location.reload();
      console.log("non");
    });


  }

  totalPub() {

    //  this.authenticationService.getCollaborateur().subscribe(data =>{ this.coll = data;});
    this.publicationService.getTotalPublication().subscribe((data1:any) =>{ this.total = data1;
      console.log("oui");

    }, err=>{
      this.authenticationService.logout();
      this.router.navigateByUrl('/login');
      // window.location.reload();
      console.log("non");
    });


  }




  consulterProfil(a){

  localStorage.setItem("consulterProfil",a);
  this.router.navigateByUrl('/consulterProfil')
  //  console.log(this.getProfil());
  }
  getProfil(){

  return  localStorage.getItem("consulterProfil");

  }
}
