import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LavaderosComponent } from './lavaderos.component';

describe('LavaderosComponent', () => {
  let component: LavaderosComponent;
  let fixture: ComponentFixture<LavaderosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LavaderosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LavaderosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
