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

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: '', component: MainLayoutComponent, children: [
      {path: 'home', component: HomeComponent},
      {path: 'events', component: EventsComponent},
      {path: 'praying-calendar', component: PrayingCalendarComponent},
      {path: 'anniversaries', component: AnniversariesComponent},
      {path: 'directory', component: DirectoryComponent},

      {path: 'settings', component: SettingsComponent},

      {path: 'terms', component: TermsComponent},
      {path: 'about', component: AboutComponent},
      {path: 'donate', component: DonateComponent},

      {path: 'daily-reading-calendar', component: DailyReadingCalendarComponent},
    ]
  },
  {path: '**', redirectTo: 'home'},
];

@NgModule({
  declarations: [
    MainLayoutComponent,
    HomeComponent,
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
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule {
}
