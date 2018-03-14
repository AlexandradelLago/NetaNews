import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavPrivateComponent } from './nav-private.component';

describe('NavPrivateComponent', () => {
  let component: NavPrivateComponent;
  let fixture: ComponentFixture<NavPrivateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavPrivateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavPrivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
