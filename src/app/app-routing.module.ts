import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./core/home/home.component";
import {SettingsComponent} from "./core/settings/settings.component";
import {TermsComponent} from "./core/terms/terms.component";
import {AboutComponent} from "./core/about/about.component";
import {DonateComponent} from "./core/donate/donate.component";
import {MainLayoutComponent} from "./layout/main-layout/main-layout.component";
import {AppMaterialModule} from "./app-material.module";
import {CommonModule} from "@angular/common";
import {EventsComponent} from "./core/events/events.component";
import {PrayingCalendarComponent} from "./core/praying-calendar/praying-calendar.component";
import {AnniversariesComponent} from "./core/anniversaries/anniversaries.component";
import {DirectoryComponent} from "./core/directory/directory.component";
import {MatTooltipModule} from "@angular/material/tooltip";
import {DailyReadingCalendarComponent} from "./core/daily-reading-calendar/daily-reading-calendar.component";
import {ChurchesComponent} from "./core/directory/churches/churches.component";
import {PastorsComponent} from "./core/directory/pastors/pastors.component";
import {PlacesComponent} from "./core/directory/places/places.component";
import {HttpClientModule} from "@angular/common/http";

import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: '', component: MainLayoutComponent, children: [
      {path: 'home', component: HomeComponent, data: {title: 'Inicio'}},
      {path: 'events', component: EventsComponent, data: {title: 'Eventos'}},
      {path: 'praying-calendar', component: PrayingCalendarComponent, data: {title: 'Calendario de oración'}},
      {path: 'anniversaries', component: AnniversariesComponent, data: {title: 'Aniversarios'}},
      {
        path: 'directory', component: DirectoryComponent, data: {title: 'Directorio'},
        children: [
          {path: 'churches', component: ChurchesComponent},
          {path: 'pastors', component: PastorsComponent},
          {path: 'places', component: PlacesComponent},
          {path: '', redirectTo: 'churches', pathMatch: 'full'}
        ]
      },

      {path: 'settings', component: SettingsComponent, data: {title: 'Configuración'}},

      {path: 'terms', component: TermsComponent, data: {title: 'Términos y condiciones'}},
      {path: 'about', component: AboutComponent, data: {title: 'Acerca de Proyecciones'}},
      {path: 'donate', component: DonateComponent, data: {title: 'Donar'}},

      {
        path: 'daily-reading-calendar',
        component: DailyReadingCalendarComponent,
        data: {title: 'Plan de lectura diario de la Biblia'}
      },
    ]
  },
  {path: '**', redirectTo: 'home'},
];

@NgModule({
  declarations: [
    MainLayoutComponent,
    HomeComponent,
    EventsComponent,
    PrayingCalendarComponent,
    AnniversariesComponent,
    DirectoryComponent,
    ChurchesComponent,
    PastorsComponent,
    PlacesComponent,
    SettingsComponent,
    TermsComponent,
    AboutComponent,
    DonateComponent,
    DailyReadingCalendarComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    AppMaterialModule,
    CommonModule,
    MatTooltipModule,
    HttpClientModule,
    ScheduleModule,
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule {
}
