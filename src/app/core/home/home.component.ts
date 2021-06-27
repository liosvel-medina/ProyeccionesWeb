import {Component, OnInit} from '@angular/core';

export enum EventType {
  default,
  retiro,
  meeting,
  birthday,
  celebration,
  anniversary,
  praying,
  study,
}

export interface TodayEvent {
  name: string;
  type: EventType;
  participants?: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  eventColors = {
    default: '#33344c',
    retiro: '#44c488',
    meeting: '#3c95ff',
    birthday: '#c9334b',
    celebration: '#9140ff',
    anniversary: '#ba2f80',
    praying: '#ff8535',
    study: '#ffb62c',
  };

  todayEvents: TodayEvent[] = [
    {name: 'Retiro de adultos', type: EventType.retiro, participants: 'Hermanos mayores de 45 años'},
    {name: 'Asamblea anual ACBCOcc', type: EventType.meeting, participants: 'Pastores, Misioneros, Líderes'},
    {name: 'Día de las madres', type: EventType.celebration},
    {name: 'Día de ayuno y oración por las misiones', type: EventType.praying},
    {name: 'Aniversario de fundación de la ACBCOcc', type: EventType.anniversary},
    {name: 'Graduación del Seminario', type: EventType.study, participants: 'Estudiantes del Seminario'},
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  getColor(event: TodayEvent): string {
    let color = this.eventColors['default'];

    if (event.type === EventType.retiro) {
      color = this.eventColors['retiro'];
    } else if (event.type === EventType.meeting) {
      color = this.eventColors['meeting'];
    } else if (event.type === EventType.birthday) {
      color = this.eventColors['birthday'];
    } else if (event.type === EventType.celebration) {
      color = this.eventColors['celebration'];
    } else if (event.type === EventType.anniversary) {
      color = this.eventColors['anniversary'];
    } else if (event.type === EventType.praying) {
      color = this.eventColors['praying'];
    } else if (event.type === EventType.study) {
      color = this.eventColors['study'];
    }

    return color;
  }

}
