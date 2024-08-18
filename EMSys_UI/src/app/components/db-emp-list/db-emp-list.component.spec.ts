import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbEmpListComponent } from './db-emp-list.component';

describe('DbEmpListComponent', () => {
  let component: DbEmpListComponent;
  let fixture: ComponentFixture<DbEmpListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DbEmpListComponent]
    });
    fixture = TestBed.createComponent(DbEmpListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
