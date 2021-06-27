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

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: '', component: MainLayoutComponent, children: [
      {path: 'home', component: HomeComponent},
      {path: 'settings', component: SettingsComponent},
      {path: 'terms', component: TermsComponent},
      {path: 'about', component: AboutComponent},
      {path: 'donate', component: DonateComponent},
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
  ],
  imports: [
    RouterModule.forRoot(routes),
    AppMaterialModule,
    CommonModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
