import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  Output,
  EventEmitter,
} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {config} from '../../api/config';
import {PrayingMotive, Response} from "../../api/praying-motives";
import {months} from '../../app.config';

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

  @Output() isLoadingEvent = new EventEmitter<boolean>();

  scrollTop = 0;

  tabs: Month[] = [];

  @ViewChild('panel') panel: ElementRef;

  constructor(private http: HttpClient, panel: ElementRef) {
    this.panel = panel;
  }

  ngOnInit(): void {
    this.requestContent();
  }

  requestContent(): void {
    this.isLoadingEvent.emit(true);

    this.http.get<Response>(config.urls.prayingMotives, {params: {limit: 366}}).subscribe(
      response => {
        this.isLoadingEvent.emit(false);
        this.initContent(response);
      },
      error => {
        this.isLoadingEvent.emit(false);
        console.error('error', error);
      },
      () => {
      }
    )
  }

  private initContent(response: Response) {
    for (const month of months) {
      this.tabs.push(<Month>{name: month, motives: []});
    }

    const results = response.results || [];
    const size = results.length;
    for (let i = 0; i < size; i++) {
      let item = results[i];
      let month = Number(item.date.split('-')[1]) - 1;
      this.tabs[month].motives.push(item);
    }
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
