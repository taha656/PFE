
import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpResponse, HttpEventType } from '@angular/common/http';
import {CollaborateurService} from "../collaborateur.service";
import {Router} from "@angular/router";

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
  selector: 'form-upload',
  templateUrl: './form-upload.component.html',
  styleUrls: ['./form-upload.component.css']
})
export class FormUploadComponent implements OnInit {
  @Input('user') user: any;
  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };
  profilephoto: any = null;
  profilephotoBase64: any = null;

  constructor(private collaborateurService: CollaborateurService, public router:Router) {

  }

  ngOnChanges() {
    if(this.user && this.user.profilephoto) {
      this.profilephotoBase64 = this.formatFileSrc(this.user.profilephoto)
    }
  }
  ngOnInit() {}
  //trecuperi fichier w trécptih
  async selectFile(event) {
    console.log('@@@@@', this.user);

    const file = event.target.files[0];

    if (file.type.match('image.*')) {
      this.profilephotoBase64 = await getBase64(file);
      this.profilephoto = formatFile(this.profilephotoBase64, file.name);
      this.updateProfilePhoto();
    } else {
      alert('invalid format!');
    }
  }

  formatFileSrc = file => `data:${file.mimeType};base64,${file.data}`;

  updateProfilePhoto() {
    const profilephoto = this.profilephoto;
    console.log("titita"+this.profilephoto);
    console.log(this.user)
    //console.log(this.user.phonenumber);
    console.log('#####', { ...this.user,profilephoto });
    this.collaborateurService.updateUser({ ...this.user, profilephoto }).subscribe(res => {
      if(res.valeur === 200) {
        location.reload()
        //this.user = { ...this.user,profilephoto };
      }
    });
  }
}
