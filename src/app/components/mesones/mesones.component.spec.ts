import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesonesComponent } from './mesones.component';

describe('MesonesComponent', () => {
  let component: MesonesComponent;
  let fixture: ComponentFixture<MesonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesonesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MesonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
