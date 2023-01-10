import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ProvincePageComponent } from './components/province-page/province-page.component';

const routes: Routes = [{ path: '', component: LandingPageComponent },
{ path: 'province-page', component: ProvincePageComponent }];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
