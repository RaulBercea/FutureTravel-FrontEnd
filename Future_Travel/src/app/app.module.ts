import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgChartsModule } from 'ng2-charts';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ProvincesPageComponent } from './components/provinces-page/provinces-page.component';
import { ProvinceComponent } from './components/province/province.component';
import { AboutPageComponent } from './components/about-page/about-page.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, LandingPageComponent, ProvincesPageComponent, ProvinceComponent, AboutPageComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    NgChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
