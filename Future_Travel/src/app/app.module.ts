import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgChartsModule } from 'ng2-charts';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ProvincePageComponent } from './components/province-page/province-page.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, LandingPageComponent, ProvincePageComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    NgChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
