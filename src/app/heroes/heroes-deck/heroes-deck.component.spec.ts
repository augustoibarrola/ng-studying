import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesDeckComponent } from './heroes-deck.component';

describe('HeroesDeckComponent', () => {
  let component: HeroesDeckComponent;
  let fixture: ComponentFixture<HeroesDeckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroesDeckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
