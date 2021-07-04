import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

export interface Pastor {
  name: string;
  place?: string;
}

@Component({
  selector: 'app-pastors',
  templateUrl: './pastors.component.html',
  styleUrls: ['./pastors.component.css']
})
export class PastorsComponent implements OnInit {

  scrollTop = 0;

  pastors: Pastor[] = [
    {name: 'Abdiel Morfa Cabrera', place: 'Seminario Teológico Bautista Dr. Rafael'},
    {name: 'Abel Pérez Hernámdez', place: 'Iglesia Bautista Alcance Victoria'},
    {name: 'Adolfo Díaz Acosta', place: 'Iglesia Bautista Reparto Oriente'},
    {name: 'Adonis Alonso Arteaga', place: 'Iglesia Bautista Bayate'},
    {name: 'Adriel Carrazana Monteagudo', place: 'Iglesia Bautista Los Pinos'},
    {name: 'Adán Barrera Álvarez', place: 'Iglesia Bautista Alonso Rojas'},
    {name: 'Abel Pérez Hernámdez', place: 'Iglesia Bautista Alcance Victoria'},
    {name: 'Adolfo Díaz Acosta', place: 'Iglesia Bautista Reparto Oriente'},
    {name: 'Adonis Alonso Arteaga', place: 'Iglesia Bautista Bayate'},
    {name: 'Adriel Carrazana Monteagudo', place: 'Iglesia Bautista Los Pinos'},
    {name: 'Adán Barrera Álvarez', place: 'Iglesia Bautista Alonso Rojas'},
    {name: 'Abel Pérez Hernámdez', place: 'Iglesia Bautista Alcance Victoria'},
    {name: 'Adolfo Díaz Acosta', place: 'Iglesia Bautista Reparto Oriente'},
    {name: 'Adonis Alonso Arteaga', place: 'Iglesia Bautista Bayate'},
    {name: 'Adriel Carrazana Monteagudo', place: 'Iglesia Bautista Los Pinos'},
    {name: 'Adán Barrera Álvarez', place: 'Iglesia Bautista Alonso Rojas'},
    {name: 'Abel Pérez Hernámdez', place: 'Iglesia Bautista Alcance Victoria'},
    {name: 'Adolfo Díaz Acosta', place: 'Iglesia Bautista Reparto Oriente'},
    {name: 'Adonis Alonso Arteaga', place: 'Iglesia Bautista Bayate'},
    {name: 'Adriel Carrazana Monteagudo', place: 'Iglesia Bautista Los Pinos'},
    {name: 'Adán Barrera Álvarez', place: 'Iglesia Bautista Alonso Rojas'},
    {name: 'Abel Pérez Hernámdez', place: 'Iglesia Bautista Alcance Victoria'},
    {name: 'Adolfo Díaz Acosta', place: 'Iglesia Bautista Reparto Oriente'},
    {name: 'Adonis Alonso Arteaga', place: 'Iglesia Bautista Bayate'},
    {name: 'Adriel Carrazana Monteagudo', place: 'Iglesia Bautista Los Pinos'},
    {name: 'Adán Barrera Álvarez', place: 'Iglesia Bautista Alonso Rojas'},
    {name: 'Abel Pérez Hernámdez', place: 'Iglesia Bautista Alcance Victoria'},
    {name: 'Adolfo Díaz Acosta', place: 'Iglesia Bautista Reparto Oriente'},
    {name: 'Adonis Alonso Arteaga', place: 'Iglesia Bautista Bayate'},
    {name: 'Adriel Carrazana Monteagudo', place: 'Iglesia Bautista Los Pinos'},
    {name: 'Adán Barrera Álvarez', place: 'Iglesia Bautista Alonso Rojas'},
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
