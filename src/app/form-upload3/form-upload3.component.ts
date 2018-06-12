import {Component, Input, OnInit} from '@angular/core';

import {SavePublicationServiceService} from "../save-publication-service.service";
import {Router} from "@angular/router";
import {PublicationComponent} from "../publication/publication.component";
import swal from 'sweetalert2';
export const getBase64 = file => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  return new Promise((resolve, reject) => {
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
};

export const formatFile = (base64String, fileName) => ({
  fileName,
  mimeType: base64String.slice(
    base64String.indexOf(':') + 1,
    base64String.indexOf(';')
  ),
  data: base64String.slice(base64String.indexOf(',') + 1, base64String.length)
});

@Component({
  selector: 'form-upload3',
  templateUrl: './form-upload3.component.html',
  styleUrls: ['./form-upload3.component.css']
})
export class FormUpload3Component implements OnInit {
  @Input('user') user: any;
  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };
  profilephoto: any = null;
  profilephotoBase64: any = null;

  constructor(private publicationComponent:PublicationComponent, public savePublicationService:SavePublicationServiceService,public router:Router) {

  }

  ngOnChanges() {
    if(this.user && this.user.profilephoto) {
      this.profilephotoBase64 = this.formatFileSrc(this.user.profilephoto)
    }
  }
  ngOnInit() {}
  //trecuperi fichier w trécptih
  async selectFile3(event) {
    console.log('@@@@@', this.user);

    const file = event.target.files[0];

    if (file.type.match('image.*')) {
      this.profilephotoBase64 = await getBase64(file);
      this.profilephoto = formatFile(this.profilephotoBase64, file.name);
      this.updateProfilePhoto1();

      swal(
        'La publication a été ajoutée avec succes!',
        'success'
      )

    } else {
      alert('invalid format!');
    }
  }

  formatFileSrc = file => `data:${file.mimeType};base64,${file.data}`;

  updateProfilePhoto1() {
    const profilephoto = this.profilephoto;
    console.log("titita"+this.profilephoto);
    console.log(this.user)
    //console.log(this.user.phonenumber);
    console.log('#####', { ...this.user,profilephoto });
    this.savePublicationService.savePub({ ...this.user, profilephoto }).subscribe(res => {
      this.user.publicationText= null;
      this.publicationComponent.reloadData();

      if(res.valeur === 200) {

        //this.user = { ...this.user,profilephoto };
      }

    });
  }


}
