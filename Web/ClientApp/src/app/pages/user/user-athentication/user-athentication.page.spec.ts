import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAthenticationPage } from './user-athentication.page';

describe('UserAthenticationPage', () => {
  let component: UserAthenticationPage;
  let fixture: ComponentFixture<UserAthenticationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAthenticationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAthenticationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
