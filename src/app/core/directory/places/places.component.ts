import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

export interface Place {
  name: string;
  address?: string;
}

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {

  scrollTop = 0;

  places: Place[] = [
    {
      name: 'Campamento Bautista',
      address: 'Carretera a lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa ipsam magnam odio placeat rerum. Dolores doloribus maxime neque nesciunt nisi odit perspiciatis similique veniam! Adipisci in maiores mollitia placeat veritatis.'
    },
    {
      name: 'Centro Bautista',
      address: 'Carretera a lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa ipsam magnam odio placeat rerum. Dolores doloribus maxime neque nesciunt nisi odit perspiciatis similique veniam! Adipisci in maiores mollitia placeat veritatis.'
    },
    {
      name: 'Hogar de Ancianos Bautista',
      address: 'Carretera a lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa ipsam magnam odio placeat rerum. Dolores doloribus maxime neque nesciunt nisi odit perspiciatis similique veniam! Adipisci in maiores mollitia placeat veritatis.'
    },
    {
      name: 'Seminario Bautista',
      address: 'Carretera a lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa ipsam magnam odio placeat rerum. Dolores doloribus maxime neque nesciunt nisi odit perspiciatis similique veniam! Adipisci in maiores mollitia placeat veritatis.'
    },
    {
      name: 'Campamento Bautista',
      address: 'Carretera a lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa ipsam magnam odio placeat rerum. Dolores doloribus maxime neque nesciunt nisi odit perspiciatis similique veniam! Adipisci in maiores mollitia placeat veritatis.'
    },
    {
      name: 'Centro Bautista',
      address: 'Carretera a lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa ipsam magnam odio placeat rerum. Dolores doloribus maxime neque nesciunt nisi odit perspiciatis similique veniam! Adipisci in maiores mollitia placeat veritatis.'
    },
    {
      name: 'Hogar de Ancianos Bautista',
      address: 'Carretera a lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa ipsam magnam odio placeat rerum. Dolores doloribus maxime neque nesciunt nisi odit perspiciatis similique veniam! Adipisci in maiores mollitia placeat veritatis.'
    },
    {
      name: 'Seminario Bautista',
      address: 'Carretera a lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa ipsam magnam odio placeat rerum. Dolores doloribus maxime neque nesciunt nisi odit perspiciatis similique veniam! Adipisci in maiores mollitia placeat veritatis.'
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
