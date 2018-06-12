import { Component, OnInit } from '@angular/core';
import {AuthentificaionService} from "../authentificaion.service";
import {PublicationComponent} from "../publication/publication.component";
import {Router} from "@angular/router";
import swal from 'sweetalert2';
import {PublicationService} from "../publication.service";
import {FormUpload2Component} from "../form-upload2/form-upload2.component";
@Component({
  selector: 'app-my-publication',
  templateUrl: './my-publication.component.html',
  styleUrls: ['./my-publication.component.css']
})
export class MyPublicationComponent implements OnInit {
  MypagePublication: any;
  rev: any;

  constructor(public formUpload2:FormUpload2Component,private publicationService:PublicationService, private authenticationService: AuthentificaionService, public publicationComponent: PublicationComponent, public router: Router) {
  }

  ngOnInit() {

    this.reloadData();
  }

  reloadData() {

    this.authenticationService.getMyPublicationList().subscribe(data1 => {
      this.MypagePublication = data1;
      this.rev = this.MypagePublication.reverse();


    }, err => {
      //  this.authenticationService.logout();
      //  this.router.navigateByUrl('/login');
      // window.location.reload();
      console.log(err);
    });


  }

  supprimerPublication(idDeletePublication) {
    swal({
      title: 'Etes vous sure de vouloir supprimer ?',
      text: "la publicaion sera perdue!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'oui supprimer!'
    }).then((result) => {
      if (result.value) {

        this.publicationService.SupprimerPublication(idDeletePublication).subscribe((data: any) => {


          this.reloadData();

          swal(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }, err => {
        })

      }
    })


  }
}
