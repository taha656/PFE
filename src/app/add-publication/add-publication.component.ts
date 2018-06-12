import { Component, OnInit } from '@angular/core';
import {PublicationModel} from "../Model/PublicationModel";
import {SavePublicationServiceService} from "../save-publication-service.service";
import {PublicationComponent} from "../publication/publication.component";
import {FormUpload3Component} from "../form-upload3/form-upload3.component";
import swal from 'sweetalert2';

@Component({
  selector: 'app-add-publication',
  templateUrl: './add-publication.component.html',
  styleUrls: ['./add-publication.component.css']
})
export class AddPublicationComponent implements OnInit {
  publication:PublicationModel= new PublicationModel();
  constructor(private savePublicationService:SavePublicationServiceService,public publicationComponent:PublicationComponent , public formUpload3Component:FormUpload3Component) { }

  ngOnInit() {
  }

  savePublication(){


    this.savePublicationService.savePub(this.publication)
      .subscribe((data :any)=> {
        this.publication=data;
        console.log("ajout");
        this.publicationComponent.reloadData();
        swal(
          'Good job!',
          'You clicked the button!',
          'success'
        )

        //this.reloadData();
       window.location.reload();


       // this.p=1;
      }, err => {
        console.log(err);
      })

  }
  formatFileSrc = file => `data:${file.mimeType};base64,${file.data}`;
}
