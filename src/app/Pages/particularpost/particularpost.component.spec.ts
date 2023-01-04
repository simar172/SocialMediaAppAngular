import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticularpostComponent } from './particularpost.component';

describe('ParticularpostComponent', () => {
  let component: ParticularpostComponent;
  let fixture: ComponentFixture<ParticularpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticularpostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParticularpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
