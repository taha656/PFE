import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-administrateur',
  templateUrl: './administrateur.component.html',
  styleUrls: ['./administrateur.component.css']
})
export class AdministrateurComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }

  publicationParJaime(){
    this.router.navigateByUrl('/nbLikes')
  }
}
