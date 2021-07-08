import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {config} from '../../api/config';
import {PrayingMotive, Response} from "../../api/praying-motives";

export interface Month {
  name: string;
  motives: PrayingMotive[];
}

@Component({
  selector: 'app-praying-calendar',
  templateUrl: './praying-calendar.component.html',
  styleUrls: ['./praying-calendar.component.css']
})
export class PrayingCalendarComponent implements OnInit {

  scrollTop = 0;

  months: Month[] = [];

  @ViewChild('panel') panel: ElementRef;

  constructor(private http: HttpClient, panel: ElementRef) {
    this.panel = panel;
  }

  ngOnInit(): void {
    this.initContent();
  }

  initContent(): void {
    this.http.get<Response>(config.urls.prayingMotives, {params: {limit: 366}}).subscribe(
      response => {
        this.months.push(<Month>{name: 'Enero', motives: response.results});
      },
      error => {
        console.error('error', error);
      }
    )
  }

  getDay(prayingMotive: PrayingMotive) {
    let parts = prayingMotive.date.split('-');
    return parts[2];
  }

  scrollPanelToTop() {
    if (this.panel != undefined) {
      this.panel.nativeElement.scrollTop = 0;
    }
  }

  onScroll(event: any) {
    this.scrollTop = event.target.scrollTop;
  }

  isGoUpVisible() {
    return this.scrollTop > 48;
  }

}
