import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SilleteriaComponent } from './silleteria.component';

describe('SilleteriaComponent', () => {
  let component: SilleteriaComponent;
  let fixture: ComponentFixture<SilleteriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SilleteriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SilleteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
