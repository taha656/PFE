import { Component, OnInit } from '@angular/core';
import {AuthentificaionService} from "../authentificaion.service";

@Component({
  selector: 'app-my-publication',
  templateUrl: './my-publication.component.html',
  styleUrls: ['./my-publication.component.css']
})
export class MyPublicationComponent implements OnInit {
  MypagePublication:any;
  constructor(private authenticationService:AuthentificaionService) { }

  ngOnInit() {

    this.reloadData();
  }
  reloadData() {

    this.authenticationService.getMyPublicationList().subscribe(data1 =>{ this.MypagePublication = data1;
      console.log("oui");


//console.log(this.authentificationComponent.username);
    }, err=>{
      //  this.authenticationService.logout();
      //  this.router.navigateByUrl('/login');
      // window.location.reload();
      console.log(err);
    });


  }


}
