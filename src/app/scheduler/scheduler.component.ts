

import {Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import "dhtmlx-scheduler";
import {} from "@types/dhtmlxscheduler";
import {Router} from "@angular/router";
import {EventService} from "./event.service";
import {element} from "protractor";
import {until} from "selenium-webdriver";
import elementsLocated = until.elementsLocated;

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: "scheduler",
  styleUrls: ['scheduler.component.css'],
  templateUrl: 'scheduler.component.html',
  providers: [EventService],
})

export class SchedulerComponent implements OnInit {
  @ViewChild("scheduler_here") schedulerContainer: ElementRef;
  constructor(public router:Router,public eventService:EventService) { }
  events: Event[]=[];
  elements: Element[]=[];
  methode(){
    this.eventService.get();
  }

  ngOnInit(){
    scheduler.init(this.schedulerContainer.nativeElement, new Date());
    scheduler.config.xml_date = "%Y-%m-%d %H:%i";
    scheduler.init(this.schedulerContainer.nativeElement);

    scheduler.parse(this.events,"json");


    this.eventService.get()



  }
}
