import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookShowCompComponent } from './book-show-comp.component';

describe('BookShowCompComponent', () => {
  let component: BookShowCompComponent;
  let fixture: ComponentFixture<BookShowCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookShowCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookShowCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
