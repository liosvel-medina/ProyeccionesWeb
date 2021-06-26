import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {
  links = [
    {type: 'item', path: 'home', icon: 'home', label: 'Inicio'},
    {type: 'item', path: 'events', icon: 'date_range', label: 'Eventos'},
    {type: 'item', path: 'praying-calendar', icon: 'description', label: 'Calendario de oración'},
    {type: 'item', path: 'anniversaries', icon: 'cake', label: 'Aniversarios'},
    {type: 'item', path: 'directory', icon: 'person', label: 'Directorio'},
    {type: 'divider'},
    {type: 'item', path: 'settings', icon: 'settings', label: 'Configuración'},
    {type: 'divider'},
    {type: 'item', path: 'terms', icon: 'description', label: 'Términos y condiciones'},
    {type: 'item', path: 'about', icon: 'info', label: 'Acerca de Proyecciones'},
    {type: 'item', path: 'donate', icon: 'money', label: 'Donar'},
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
