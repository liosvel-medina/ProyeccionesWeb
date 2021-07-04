import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

export interface Church {
  name: string;
  address?: string;
}

export interface Province {
  name: string;
  churches: Church[];
}

@Component({
  selector: 'app-churches',
  templateUrl: './churches.component.html',
  styleUrls: ['./churches.component.css']
})
export class ChurchesComponent implements OnInit {

  scrollTop = 0;

  provinces: Province[] = [
    {
      name: 'Pinar del Río', churches: [
        {
          name: 'Acueducto',
          address: 'Calle Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dolores qui repudiandae. Ab, dignissimos dolorum explicabo illo ipsa ipsam ipsum laudantium maxime natus praesentium quis rem saepe sed vitae voluptatum!'
        },
        {
          name: 'Alonso Rojas',
          address: 'Calle Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dolores qui repudiandae. Ab, dignissimos dolorum explicabo illo ipsa ipsam ipsum laudantium maxime natus praesentium quis rem saepe sed vitae voluptatum!'
        },
        {
          name: 'Babineyes',
          address: 'Calle Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dolores qui repudiandae. Ab, dignissimos dolorum explicabo illo ipsa ipsam ipsum laudantium maxime natus praesentium quis rem saepe sed vitae voluptatum!'
        },
        {
          name: 'Brasero',
          address: 'Calle Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dolores qui repudiandae. Ab, dignissimos dolorum explicabo illo ipsa ipsam ipsum laudantium maxime natus praesentium quis rem saepe sed vitae voluptatum!'
        },
        {
          name: 'Briones Montoto',
          address: 'Calle Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dolores qui repudiandae. Ab, dignissimos dolorum explicabo illo ipsa ipsam ipsum laudantium maxime natus praesentium quis rem saepe sed vitae voluptatum!'
        },
        {
          name: 'Iglesia 12',
          address: 'Calle Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dolores qui repudiandae. Ab, dignissimos dolorum explicabo illo ipsa ipsam ipsum laudantium maxime natus praesentium quis rem saepe sed vitae voluptatum!'
        },
        {
          name: 'Iglesia 13',
          address: 'Calle Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dolores qui repudiandae. Ab, dignissimos dolorum explicabo illo ipsa ipsam ipsum laudantium maxime natus praesentium quis rem saepe sed vitae voluptatum!'
        },
        {
          name: 'Iglesia 14',
          address: 'Calle Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dolores qui repudiandae. Ab, dignissimos dolorum explicabo illo ipsa ipsam ipsum laudantium maxime natus praesentium quis rem saepe sed vitae voluptatum!'
        },
        {
          name: 'Iglesia 15',
          address: 'Calle Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dolores qui repudiandae. Ab, dignissimos dolorum explicabo illo ipsa ipsam ipsum laudantium maxime natus praesentium quis rem saepe sed vitae voluptatum!'
        },
        {
          name: 'Iglesia 16',
          address: 'Calle Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dolores qui repudiandae. Ab, dignissimos dolorum explicabo illo ipsa ipsam ipsum laudantium maxime natus praesentium quis rem saepe sed vitae voluptatum!'
        },
      ]
    },
    {name: 'La Habana', churches: []},
    {name: 'Artemisa', churches: []},
    {name: 'Mayabeque', churches: []},
    {name: 'Matanzas', churches: []},
    {name: 'Villa Clara', churches: []},
    {name: 'Cienfuegos', churches: []},
    {name: 'Sancti Spíritus', churches: []},
    {name: 'Ciego de Ávila', churches: []},
    {name: 'Las Tunas', churches: []},
    {name: 'Holguín', churches: []},
    {name: 'Granma', churches: []},
    {name: 'Santiago de Cuba', churches: []},
    {name: 'Guantánamo', churches: []},
    {name: 'Isla de la Juventud', churches: []},
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
