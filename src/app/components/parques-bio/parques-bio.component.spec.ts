import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParquesBioComponent } from './parques-bio.component';

describe('ParquesBioComponent', () => {
  let component: ParquesBioComponent;
  let fixture: ComponentFixture<ParquesBioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParquesBioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParquesBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
