import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthentificaionService} from "../authentificaion.service";
import { ChartsModule } from 'ng2-charts';
import {PublicationService} from "../publication.service";
@Component({
  selector: 'app-administrateur',
  templateUrl: './administrateur.component.html',
  styleUrls: ['./administrateur.component.css']
})
export class AdministrateurComponent implements OnInit {
  public total:any;
  public list1:any;
  public totalL:any;
  public totalS:any;
  public lineChartData:Array<any> = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
  constructor(public publicationService:PublicationService,public router:Router, public authenticationService:AuthentificaionService) { }

  ngOnInit() {
this.totalPub();
this.totalShare();
this.totalLike()
  }
//chart 1
  // Radar
  public radarChartLabels:string[] = ['fastfood', 'café', 'dormir', 'travail', 'code', 'sport', 'sortir'];

  public radarChartData:any = [
    {data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B'}
  ];
  public radarChartType:string = 'radar';

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  //fin chart 1

  // debut chart 2
  public lineChartType:string = 'line';
  public pieChartType:string = 'pie';
  public pieChartLabels:string[] = ['Nombre de publications', 'nombre de like ', 'Nombre de partages'];
  public pieChartData:any[] = [localStorage.getItem('pub'), localStorage.getItem('like'), localStorage.getItem('share')];

  public randomizeType():void {
    this.lineChartType = this.lineChartType === 'line' ? 'bar' : 'line';
    this.pieChartType = this.pieChartType === 'doughnut' ? 'pie' : 'doughnut';
  }



  publicationParJaime(){
    this.router.navigateByUrl('/nbLikes')
  }

  onLogout(){
    this.authenticationService.logout();

    this.router.navigateByUrl('/login');
    // window.location.reload();
  }

  totalPub() {

    //  this.authenticationService.getCollaborateur().subscribe(data =>{ this.coll = data;});
    this.publicationService.getTotalPublication().subscribe((data1:any) =>{ this.total = data1;
    localStorage.setItem('pub',this.total);
      console.log(localStorage.getItem('pub'));

    }, err=>{
      this.authenticationService.logout();
      this.router.navigateByUrl('/login');
      // window.location.reload();
      console.log("non");
    });


  }

  totalLike() {

    //  this.authenticationService.getCollaborateur().subscribe(data =>{ this.coll = data;});
    this.publicationService.getTotalLike().subscribe((data1:any) =>{ this.totalL = data1;
      console.log("oui");
      localStorage.setItem('like',this.totalL);

    }, err=>{
      this.authenticationService.logout();
      this.router.navigateByUrl('/login');
      // window.location.reload();
      console.log("non");
    });


  }


  totalShare() {

    //  this.authenticationService.getCollaborateur().subscribe(data =>{ this.coll = data;});
    this.publicationService.getTotalShare().subscribe((data1:any) =>{ this.totalS = data1;
      console.log("oui");
      localStorage.setItem('share',this.totalS);

    }, err=>{
      this.authenticationService.logout();
      this.router.navigateByUrl('/login');
      // window.location.reload();
      console.log("non");
    });


  }
}
