import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbEmpUpdateComponent } from './db-emp-update.component';

describe('DbEmpUpdateComponent', () => {
  let component: DbEmpUpdateComponent;
  let fixture: ComponentFixture<DbEmpUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DbEmpUpdateComponent]
    });
    fixture = TestBed.createComponent(DbEmpUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
