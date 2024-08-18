import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbEmpInsertComponent } from './db-emp-insert.component';

describe('DbEmpInsertComponent', () => {
  let component: DbEmpInsertComponent;
  let fixture: ComponentFixture<DbEmpInsertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DbEmpInsertComponent]
    });
    fixture = TestBed.createComponent(DbEmpInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
