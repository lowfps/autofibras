import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParquesInfantilesComponent } from './parques-infantiles.component';

describe('ParquesInfantilesComponent', () => {
  let component: ParquesInfantilesComponent;
  let fixture: ComponentFixture<ParquesInfantilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParquesInfantilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParquesInfantilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
