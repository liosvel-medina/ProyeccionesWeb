import {Component, OnInit, ViewChild} from '@angular/core';
import {
  DayService,
  WeekService,
  WorkWeekService,
  MonthService,
  AgendaService,
  MonthAgendaService,
  TimelineViewsService,
  TimelineMonthService,
  EventSettingsModel, ScheduleComponent,
} from '@syncfusion/ej2-angular-schedule';
import {L10n, loadCldr} from '@syncfusion/ej2-base';

import {dictionary} from "./es-dictionary";

declare let require: Function;
loadCldr(
  require('../../../../node_modules/cldr-data/supplemental/numberingSystems.json'),
  require('../../../../node_modules/cldr-data/main/es/ca-gregorian.json'),
  require('../../../../node_modules/cldr-data/main/es/currencies.json'),
  require('../../../../node_modules/cldr-data/main/es/numbers.json'),
  require('../../../../node_modules/cldr-data/main/es/timeZoneNames.json')
);
L10n.load(dictionary);

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
