import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvincesPageComponent } from './provinces-page.component';

describe('ProvincePageComponent', () => {
  let component: ProvincesPageComponent;
  let fixture: ComponentFixture<ProvincesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProvincesPageComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ProvincesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
