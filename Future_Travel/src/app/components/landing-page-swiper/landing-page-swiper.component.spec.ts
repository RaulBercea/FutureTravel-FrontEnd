import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageSwiperComponent } from './landing-page-swiper.component';

describe('LandingPageSwiperComponent', () => {
  let component: LandingPageSwiperComponent;
  let fixture: ComponentFixture<LandingPageSwiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingPageSwiperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingPageSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
