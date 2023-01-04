import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorywisePostComponent } from './categorywise-post.component';

describe('CategorywisePostComponent', () => {
  let component: CategorywisePostComponent;
  let fixture: ComponentFixture<CategorywisePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorywisePostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategorywisePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
