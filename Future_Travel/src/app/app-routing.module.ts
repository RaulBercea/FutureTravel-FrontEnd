import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ProvinceComponent } from './components/province/province.component';
import { ProvincesPageComponent } from './components/provinces-page/provinces-page.component';

const routes: Routes = [{ path: '', component: LandingPageComponent },
{ path: 'provinces-page', component: ProvincesPageComponent },
{ path: 'province/:province', component: ProvinceComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
