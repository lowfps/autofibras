import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TinasJacuzzisComponent } from './tinas-jacuzzis.component';

describe('TinasJacuzzisComponent', () => {
  let component: TinasJacuzzisComponent;
  let fixture: ComponentFixture<TinasJacuzzisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TinasJacuzzisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TinasJacuzzisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
