import { Component, OnInit } from '@angular/core';
import {PublicationService} from "../publication.service";
import {Router} from "@angular/router";
import {PublicationComponent} from "../publication/publication.component";

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  constructor(public publicationService:PublicationService, public router:Router, public publicationComponent:PublicationComponent) { }

  ngOnInit() {
  }
  likePublication(c){
    this.publicationService.likePublicationService(c.id).subscribe((data :any)=> {
      //this.publication=data
      this.publicationComponent.reloadData();
      //this.reloadData();
      //   window.location.reload();

      // this.p=1;
    }, err => {
      console.log(err);
    })

  }
}
