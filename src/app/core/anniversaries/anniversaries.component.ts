import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

export interface Anniversary {
  day: string;
  churchName: string;
  age: number;
}

export interface Month {
  name: string;
  anniversaries: Anniversary[];
}

@Component({
  selector: 'app-anniversaries',
  templateUrl: './anniversaries.component.html',
  styleUrls: ['./anniversaries.component.css']
})
export class AnniversariesComponent implements OnInit {

  scrollTop = 0;

  months: Month[] = [
    {
      name: 'Enero',
      anniversaries: [
        {
          day: '01',
          churchName: 'Cumanayagua I',
          age: 107
        },
        {
          day: '03',
          churchName: 'Centro Habana 2',
          age: 12
        },
        {
          day: '07',
          churchName: 'Cerro',
          age: 58
        },
        {
          day: '07',
          churchName: '(Renacer) Loma del Indio',
          age: 12
        },
        {
          day: '08',
          churchName: 'Cumanayagua I',
          age: 107
        },
        {
          day: '09',
          churchName: 'Centro Habana 2',
          age: 12
        },
        {
          day: '10',
          churchName: 'Cerro',
          age: 58
        },
        {
          day: '10',
          churchName: '(Renacer) Loma del Indio',
          age: 12
        },
        {
          day: '10',
          churchName: 'Cumanayagua I',
          age: 107
        },
        {
          day: '11',
          churchName: 'Centro Habana 2',
          age: 12
        },
        {
          day: '11',
          churchName: 'Cerro',
          age: 58
        },
        {
          day: '12',
          churchName: '(Renacer) Loma del Indio',
          age: 12
        },
        {
          day: '13',
          churchName: 'Cumanayagua I',
          age: 107
        },
        {
          day: '14',
          churchName: 'Centro Habana 2',
          age: 12
        },
        {
          day: '15',
          churchName: 'Cerro',
          age: 58
        },
        {
          day: '16',
          churchName: '(Renacer) Loma del Indio',
          age: 12
        },
      ]
    },
    {
      name: 'Febrero',
      anniversaries: []
    },
    {
      name: 'Marzo',
      anniversaries: []
    },
    {
      name: 'Abril',
      anniversaries: []
    },
    {
      name: 'Mayo',
      anniversaries: []
    },
    {
      name: 'Junio',
      anniversaries: []
    },
    {
      name: 'Julio',
      anniversaries: []
    },
    {
      name: 'Agosto',
      anniversaries: [
        {
          day: '01',
          churchName: 'Cumanayagua I',
          age: 107
        },
        {
          day: '03',
          churchName: 'Centro Habana 2',
          age: 12
        },
        {
          day: '07',
          churchName: 'Cerro',
          age: 58
        },
        {
          day: '07',
          churchName: '(Renacer) Loma del Indio',
          age: 12
        },
        {
          day: '08',
          churchName: 'Cumanayagua I',
          age: 107
        },
        {
          day: '09',
          churchName: 'Centro Habana 2',
          age: 12
        },
        {
          day: '10',
          churchName: 'Cerro',
          age: 58
        },
        {
          day: '10',
          churchName: '(Renacer) Loma del Indio',
          age: 12
        },
        {
          day: '10',
          churchName: 'Cumanayagua I',
          age: 107
        },
        {
          day: '11',
          churchName: 'Centro Habana 2',
          age: 12
        },
        {
          day: '11',
          churchName: 'Cerro',
          age: 58
        },
        {
          day: '12',
          churchName: '(Renacer) Loma del Indio',
          age: 12
        },
        {
          day: '13',
          churchName: 'Cumanayagua I',
          age: 107
        },
        {
          day: '14',
          churchName: 'Centro Habana 2',
          age: 12
        },
        {
          day: '15',
          churchName: 'Cerro',
          age: 58
        },
        {
          day: '16',
          churchName: '(Renacer) Loma del Indio',
          age: 12
        },
        {
          day: '16',
          churchName: '(Renacer) Loma del Indio',
          age: 12
        },
        {
          day: '18',
          churchName: '(Renacer) Loma del Indio',
          age: 12
        },
        {
          day: '18',
          churchName: '(Renacer) Loma del Indio',
          age: 12
        },
        {
          day: '20',
          churchName: '(Renacer) Loma del Indio',
          age: 12
        },
      ]
    },
    {
      name: 'Septiembre',
      anniversaries: []
    },
    {
      name: 'Octubre',
      anniversaries: []
    },
    {
      name: 'Noviembre',
      anniversaries: []
    },
    {
      name: 'Diciembre',
      anniversaries: []
    },
  ];

  @ViewChild('panel') panel: ElementRef;

  constructor(panel: ElementRef) {
    this.panel = panel;
  }

  ngOnInit(): void {
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
