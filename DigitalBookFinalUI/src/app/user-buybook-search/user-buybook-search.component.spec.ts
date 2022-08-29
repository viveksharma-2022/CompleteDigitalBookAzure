import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBuybookSearchComponent } from './user-buybook-search.component';

describe('UserBuybookSearchComponent', () => {
  let component: UserBuybookSearchComponent;
  let fixture: ComponentFixture<UserBuybookSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserBuybookSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBuybookSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
