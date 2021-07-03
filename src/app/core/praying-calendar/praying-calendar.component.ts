import {Component, OnInit} from '@angular/core';

export interface PrayingMotive {
  number: string;
  motive: string;
}

export interface Month {
  name: string
  motives: PrayingMotive[]
}

@Component({
  selector: 'app-praying-calendar',
  templateUrl: './praying-calendar.component.html',
  styleUrls: ['./praying-calendar.component.css']
})
export class PrayingCalendarComponent implements OnInit {

  months: Month[] = [
    {
      name: 'Enero', motives: [
        {
          number: '01',
          motive: 'Cumplen años Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias culpa distinctio ducimus earum eveniet inventore modi possimus quisquam sed. Ab error harum incidunt itaque molestias non officia ratione sequi vitae.'
        },
        {
          number: '02',
          motive: 'Oremos hoy por Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias culpa distinctio ducimus earum eveniet inventore modi possimus quisquam sed. Ab error harum incidunt itaque molestias non officia ratione sequi vitae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias culpa distinctio ducimus earum eveniet inventore modi possimus quisquam sed. Ab error harum incidunt itaque molestias non officia ratione sequi vitae.'
        },
        {
          number: '03',
          motive: 'Ore por todas las Iglesias de Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias culpa distinctio ducimus earum eveniet inventore modi possimus quisquam sed. Ab error harum incidunt itaque molestias non officia ratione sequi vitae.'
        },
        {
          number: '04',
          motive: 'Hoy cumplen años Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias culpa distinctio ducimus earum eveniet inventore modi possimus quisquam sed. Ab error harum incidunt itaque molestias non officia ratione sequi vitae.'
        },
        {
          number: '05',
          motive: 'Continúe orando por Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias culpa distinctio ducimus earum eveniet inventore modi possimus quisquam sed. Ab error harum incidunt itaque molestias non officia ratione sequi vitae.'
        },
      ]
    },
    {
      name: 'Febrero', motives: [
        {
          number: '01',
          motive: 'Cumplen años Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias culpa distinctio ducimus earum eveniet inventore modi possimus quisquam sed. Ab error harum incidunt itaque molestias non officia ratione sequi vitae.'
        },
        {
          number: '02',
          motive: 'Oremos hoy por Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias culpa distinctio ducimus earum eveniet inventore modi possimus quisquam sed. Ab error harum incidunt itaque molestias non officia ratione sequi vitae.'
        },
        {
          number: '03',
          motive: 'Ore por todas las Iglesias de Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias culpa distinctio ducimus earum eveniet inventore modi possimus quisquam sed. Ab error harum incidunt itaque molestias non officia ratione sequi vitae.'
        },
        {
          number: '04',
          motive: 'Ore por todas las Iglesias de Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias culpa distinctio ducimus earum eveniet inventore modi possimus quisquam sed. Ab error harum incidunt itaque molestias non officia ratione sequi vitae.'
        },
        {
          number: '05',
          motive: 'Ore por todas las Iglesias de Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias culpa distinctio ducimus earum eveniet inventore modi possimus quisquam sed. Ab error harum incidunt itaque molestias non officia ratione sequi vitae.'
        },
        {
          number: '06',
          motive: 'Ore por todas las Iglesias de Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias culpa distinctio ducimus earum eveniet inventore modi possimus quisquam sed. Ab error harum incidunt itaque molestias non officia ratione sequi vitae.'
        },
        {
          number: '07',
          motive: 'Ore por todas las Iglesias de Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias culpa distinctio ducimus earum eveniet inventore modi possimus quisquam sed. Ab error harum incidunt itaque molestias non officia ratione sequi vitae.'
        },
        {
          number: '08',
          motive: 'Ore por todas las Iglesias de Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias culpa distinctio ducimus earum eveniet inventore modi possimus quisquam sed. Ab error harum incidunt itaque molestias non officia ratione sequi vitae.'
        },
        {
          number: '09',
          motive: 'Ore por todas las Iglesias de Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias culpa distinctio ducimus earum eveniet inventore modi possimus quisquam sed. Ab error harum incidunt itaque molestias non officia ratione sequi vitae.'
        },
        {
          number: '10',
          motive: 'Ore por todas las Iglesias de Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias culpa distinctio ducimus earum eveniet inventore modi possimus quisquam sed. Ab error harum incidunt itaque molestias non officia ratione sequi vitae.'
        },
      ]
    },
    {name: 'Marzo', motives: []},
    {name: 'Abril', motives: []},
    {name: 'Mayo', motives: []},
    {name: 'Junio', motives: []},
    {name: 'Julio', motives: []},
    {name: 'Agosto', motives: []},
    {name: 'Septiembre', motives: []},
    {name: 'Octubre', motives: []},
    {name: 'Noviembre', motives: []},
    {
      name: 'Diciembre', motives: [
        {
          number: '01',
          motive: 'Cumplen años Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias culpa distinctio ducimus earum eveniet inventore modi possimus quisquam sed. Ab error harum incidunt itaque molestias non officia ratione sequi vitae.'
        },
        {
          number: '02',
          motive: 'Oremos hoy por Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias culpa distinctio ducimus earum eveniet inventore modi possimus quisquam sed. Ab error harum incidunt itaque molestias non officia ratione sequi vitae.'
        },
        {
          number: '03',
          motive: 'Ore por todas las Iglesias de Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias culpa distinctio ducimus earum eveniet inventore modi possimus quisquam sed. Ab error harum incidunt itaque molestias non officia ratione sequi vitae.'
        },
      ]
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
