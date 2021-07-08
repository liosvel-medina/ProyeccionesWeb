import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Data, NavigationEnd, Router} from "@angular/router";
import {BreakpointObserver, BreakpointState} from "@angular/cdk/layout";
import {MatDrawerMode} from "@angular/material/sidenav";

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
  sideMenuMode: MatDrawerMode = 'side';

  isLoading = false;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private breakpointObserver: BreakpointObserver
  ) {
  }

  ngOnInit(): void {
    this.getRouteTitle();

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.getRouteTitle();
      }
    });

    this.breakpointObserver
      .observe(['(max-width: 768px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.sideMenuMode = 'over';
        } else {
          this.sideMenuMode = 'side';
        }
      });
  }

  private getRouteTitle() {
    this.activatedRoute.firstChild?.data.subscribe(data => {
      this.title = data.title;
    });
  }

  toggleSideMenu() {
    this.sideMenuVisible = !this.sideMenuVisible
  }

}
