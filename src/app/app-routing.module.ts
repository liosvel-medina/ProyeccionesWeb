import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./core/home/home.component";
import {SettingsComponent} from "./core/settings/settings.component";
import {TermsComponent} from "./core/terms/terms.component";
import {AboutComponent} from "./core/about/about.component";
import {DonateComponent} from "./core/donate/donate.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'terms', component: TermsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'donate', component: DonateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
