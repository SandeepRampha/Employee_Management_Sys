import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DbEmpListComponent } from './components/db-emp-list/db-emp-list.component';
import { DbEmpInsertComponent } from './components/db-emp-insert/db-emp-insert.component';
import { DbEmpUpdateComponent } from './components/db-emp-update/db-emp-update.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/DbEmpList',
    pathMatch:'full'
  },
  {
    path:'DbEmpList',
    component:DbEmpListComponent
  },
  {
    path:'DbEmpIns',
    component:DbEmpInsertComponent
  },
  {
    path:'DbEmpUpd',
    component:DbEmpUpdateComponent
  },
  {
    path:'DbEmpUpd/:empId',
    component:DbEmpUpdateComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
