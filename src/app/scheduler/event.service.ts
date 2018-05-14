import {Injectable, OnInit} from "@angular/core";
import {Event} from "../Model/Event";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {BehaviorSubject} from "rxjs/BehaviorSubject";


@Injectable()
export class EventService {
  private events: Event[] = [];
  private _eventsSubject: BehaviorSubject<Event[]> = new BehaviorSubject<Event[]>([]);

  events$: Observable<Event[]> = this._eventsSubject.asObservable();

  constructor(public http: Http) {
  }

  ngOnInit() {
    this.get();
  }

  get() {
    let data = [
      {id: 1, start_date: "2017-09-01 00:00", end_date: "2017-09-01 13:00", text: "Event 1"},
      {id: 2, start_date: "2017-09-03 00:00", end_date: "2017-09-03 13:00", text: "Event 2"}
    ];


    //  return this.http.get("http://localhost:3036/events");

  }
}
