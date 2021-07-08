import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterLandingPageComponent } from './router-landing-page.component';

describe('RouterLandingPageComponent', () => {
  let component: RouterLandingPageComponent;
  let fixture: ComponentFixture<RouterLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouterLandingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
