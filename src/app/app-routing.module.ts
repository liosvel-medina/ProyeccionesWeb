import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./core/home/home.component";
import {SettingsComponent} from "./core/settings/settings.component";
import {TermsComponent} from "./core/terms/terms.component";
import {AboutComponent} from "./core/about/about.component";
import {DonateComponent} from "./core/donate/donate.component";
import {LoginComponent} from "./layout/login/login.component";
import {MainLayoutComponent} from "./layout/main-layout/main-layout.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {
    path: '', component: MainLayoutComponent, children: [
      {path: 'home', component: HomeComponent},
      {path: 'settings', component: SettingsComponent},
      {path: 'terms', component: TermsComponent},
      {path: 'about', component: AboutComponent},
      {path: 'donate', component: DonateComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
