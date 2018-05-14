import { Component, OnInit } from '@angular/core';
import {PublicationModel} from "../Model/PublicationModel";
import {SavePublicationServiceService} from "../save-publication-service.service";
import {PublicationComponent} from "../publication/publication.component";

@Component({
  selector: 'app-add-publication',
  templateUrl: './add-publication.component.html',
  styleUrls: ['./add-publication.component.css']
})
export class AddPublicationComponent implements OnInit {
  publication:PublicationModel= new PublicationModel();
  constructor(private savePublicationService:SavePublicationServiceService,private publicationComponent:PublicationComponent) { }

  ngOnInit() {
  }

  savePublication(){


    this.savePublicationService.savePub(this.publication)
      .subscribe((data :any)=> {
        this.publication=data
        this.publicationComponent.reloadData();
        //this.reloadData();
       // window.location.reload();


       // this.p=1;
      }, err => {
        console.log(err);
      })

  }

}
