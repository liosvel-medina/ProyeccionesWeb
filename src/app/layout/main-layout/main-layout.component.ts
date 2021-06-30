import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router, RouterState} from "@angular/router";

export interface Link {
  type: string;
  path?: string;
  icon?: string;
  label?: string;
}

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {

  title = 'Proyecciones';

  links: Link[] = [
    {type: 'item', path: 'home', icon: 'home', label: 'Inicio'},
    {type: 'item', path: 'events', icon: 'date_range', label: 'Eventos'},
    {type: 'item', path: 'praying-calendar', icon: 'notes', label: 'Calendario de oración'},
    {type: 'item', path: 'anniversaries', icon: 'cake', label: 'Aniversarios'},
    {type: 'item', path: 'directory', icon: 'account_box', label: 'Directorio'},
    {type: 'divider'},
    {type: 'item', path: 'settings', icon: 'settings', label: 'Configuración'},
    {type: 'divider'},
    {type: 'item', path: 'terms', icon: 'insert_drive_file', label: 'Términos y condiciones'},
    {type: 'item', path: 'about', icon: 'info', label: 'Acerca de Proyecciones'},
    {type: 'item', path: 'donate', icon: 'paid', label: 'Donar'},
  ];

  sideMenuVisible = true;

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleSideMenu() {
    this.sideMenuVisible = !this.sideMenuVisible
  }

}
