import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';

import SwiperCore, {
  EffectFade,
  Navigation,
  Pagination,
  Autoplay,
} from 'swiper';

// install Swiper modules
SwiperCore.use([EffectFade, Navigation, Pagination, Autoplay]);

@Component({
  selector: 'app-landing-page-swiper',
  templateUrl: './landing-page-swiper.component.html',
  styleUrls: ['./landing-page-swiper.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LandingPageSwiperComponent {}
