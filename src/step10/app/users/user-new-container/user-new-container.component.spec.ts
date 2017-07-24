import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNewContainerComponent } from './user-new-container.component';

describe('UserNewContainerComponent', () => {
  let component: UserNewContainerComponent;
  let fixture: ComponentFixture<UserNewContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserNewContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserNewContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
