import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { apiServiceResolver } from './resolvers/api.resolver';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'home/:Data', component: HomeComponent },
  { path: 'dashboard/:Data', component: DashboardComponent },
  {
    path: 'dashboard/:province/:Data',
    component: DashboardComponent,
    resolve: {
      data: apiServiceResolver,
    },
  },
  { path: 'aboutus', component: AboutPageComponent },
  { path: '**', component: LandingPageComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
