import {Component, Input, OnInit} from '@angular/core';

import {SavePublicationServiceService} from "../save-publication-service.service";
import {Router} from "@angular/router";
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
  selector: 'form-upload2',
  templateUrl: './form-upload2.component.html',
  styleUrls: ['./form-upload2.component.css']
})
export class FormUpload2Component implements OnInit {
  @Input('user') user: any;
  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };
  profilephoto: any = null;
  profilephotoBase64: any = null;
p2:any;
  constructor(public savePublicationService:SavePublicationServiceService,public router:Router) {

  }

  ngOnChanges() {
    if(this.user && this.user.profilephoto) {
      this.profilephotoBase64 = this.formatFileSrc(this.user.profilephoto)
    }
  }
  ngOnInit() {}
  //trecuperi fichier w trécptih
  async selectFile2(event) {
    console.log('@@@@@', this.user);

    const file = event.target.files[0];

    if (file.type.match('image.*')) {
      this.profilephotoBase64 = await getBase64(file);
      this.profilephoto = formatFile(this.profilephotoBase64, file.name);

    } else {
      alert('invalid format!');
    }
  }

  formatFileSrc = file => `data:${file.mimeType};base64,${file.data}`;



  afficherPublication(image){

this.p2=  this.profilephotoBase64 = this.formatFileSrc(image.profilephoto)
    swal({
      title: image.valueOf().collaborateur.email,
      text:  image.valueOf().publicationText,
      imageUrl: this.p2,
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
      width:700,

      animation: false

    })

  /*  swal({
      title: image.valueOf().collaborateur.email,
      text: image.valueOf().publicationText,
      imageUrl:  this.p2,
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
      animation: true
    })*/
  }

}
