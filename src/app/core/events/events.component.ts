import {Component, OnInit} from '@angular/core';
import {
  DayService,
  WeekService,
  WorkWeekService,
  MonthService,
  AgendaService,
  MonthAgendaService,
  TimelineViewsService,
  TimelineMonthService,
  View,
  EventSettingsModel,
} from '@syncfusion/ej2-angular-schedule';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
  providers: [DayService, WeekService, WorkWeekService, MonthService,
    AgendaService, MonthAgendaService, TimelineViewsService, TimelineMonthService]
})
export class EventsComponent implements OnInit {

  public eventSettings: EventSettingsModel = {
    allowAdding: false,
    allowDeleting: false,
    allowEditing: false,
    dataSource: []
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
