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

let dictionary = {
  "es": {
    "schedule": {
      "day": "Día",
      "week": "Semana",
      "workWeek": "Semana laboral",
      "month": "Mes",
      "year": "Año",
      "agenda": "Agenda",
      "weekAgenda": "Agenda laboral",
      "workWeekAgenda": "Agenda semanal laboral",
      "monthAgenda": "Agenda mensual",
      "today": "Hoy",
      "noEvents": "Sin eventos",
      "emptyContainer": "No hay eventos planificados este día",
      "allDay": "Todo el día",
      "start": "Inicio",
      "end": "Fin",
      "more": "más",
      "close": "Cerrar",
      "cancel": "Cancelar",
      "noTitle": "(Sin título)",
      "delete": "Eliminar",
      "deleteEvent": "Este Evento",
      "deleteMultipleEvent": "Eliminar múltiples eventos",
      "selectedItems": "Elementos seleccionados",
      "deleteSeries": "Toda la serie",
      "edit": "Editar",
      "editSeries": "Toda la serie",
      "editEvent": "Este evento",
      "createEvent": "Crear",
      "subject": "Asunto",
      "addTitle": "Agregar título",
      "moreDetails": "Más detalles",
      "save": "Guardar",
      "editContent": "How would you like to change the appointment in the series?",
      "deleteContent": "Are you sure you want to delete this event?",
      "deleteMultipleContent": "Are you sure you want to delete the selected events?",
      "newEvent": "Nuevo Evento",
      "title": "Título",
      "location": "Ubicación",
      "description": "Descripción",
      "timezone": "Timezone",
      "startTimezone": "Start Timezone",
      "endTimezone": "End Timezone",
      "repeat": "Repetir",
      "saveButton": "Guardar",
      "cancelButton": "Cancelar",
      "deleteButton": "Eliminar",
      "recurrence": "Recurrence",
      "wrongPattern": "The recurrence pattern is not valid.",
      "seriesChangeAlert": "Do you want to cancel the changes made to specific instances of this series and match it to the whole series again?",
      "createError": "The duration of the event must be shorter than how frequently it occurs. Shorten the duration, or change the recurrence pattern in the recurrence event editor.",
      "sameDayAlert": "Two occurrences of the same event cannot occur on the same day.",
      "editRecurrence": "Edit Recurrence",
      "repeats": "Repeats",
      "alert": "Alerta",
      "startEndError": "The selected end date occurs before the start date.",
      "invalidDateError": "The entered date value is invalid.",
      "blockAlert": "Events cannot be scheduled within the blocked time range.",
      "ok": "Ok",
      "yes": "Sí",
      "no": "No",
      "occurrence": "Occurrence",
      "series": "Series",
      "previous": "Anterior",
      "next": "Siguiente",
      "timelineDay": "Timeline Day",
      "timelineWeek": "Timeline Week",
      "timelineWorkWeek": "Timeline Work Week",
      "timelineMonth": "Timeline Month",
      "timelineYear": "Timeline Year",
      "editFollowingEvent": "Following Events",
      "deleteTitle": "Delete Event",
      "editTitle": "Edit Event",
      "beginFrom": "Begin From",
      "endAt": "End At",
      "expandAllDaySection": "Expand-all-day-section",
      "collapseAllDaySection": "Collapse-all-day-section"
    },
    "recurrenceeditor": {
      "none": "None",
      "daily": "Daily",
      "weekly": "Weekly",
      "monthly": "Monthly",
      "month": "Month",
      "yearly": "Yearly",
      "never": "Never",
      "until": "Until",
      "count": "Count",
      "first": "First",
      "second": "Second",
      "third": "Third",
      "fourth": "Fourth",
      "last": "Last",
      "repeat": "Repeat",
      "repeatEvery": "Repeat every",
      "on": "Repeat On",
      "end": "End",
      "onDay": "Day",
      "days": "Day(s)",
      "weeks": "Week(s)",
      "months": "Month(s)",
      "years": "Year(s)",
      "every": "every",
      "summaryTimes": "time(s)",
      "summaryOn": "on",
      "summaryUntil": "until",
      "summaryRepeat": "Repeats",
      "summaryDay": "day(s)",
      "summaryWeek": "week(s)",
      "summaryMonth": "month(s)",
      "summaryYear": "year(s)",
      "monthWeek": "Month Week",
      "monthPosition": "Month Position",
      "monthExpander": "Month Expander",
      "yearExpander": "Year Expander",
      "repeatInterval": "Repeat Interval"
    },
    "calendar": {
      "today": "Hoy"
    },
  }
};

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
