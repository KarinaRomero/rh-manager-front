import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes }  from '@angular/router';

import { EmployeesComponent } from './components/employees/employees.component';
import { FormEmployeeComponent } from './components/employees/components/form-employee/form-employee.component';

import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: 'employees', redirectTo: '/employees-all' },
  { path: 'employees-add', redirectTo: '/employees-new' },
  { path: 'employee-update/id', redirectTo: '/employees-new/:id' },
  { path: 'employees-all',  component: EmployeesComponent },
  { path: 'employees-new',  component: FormEmployeeComponent },
  { path: 'employees-new/:id', component: FormEmployeeComponent },
  {
    path: '',
    redirectTo: '/employees',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    EmployeesComponent,
    FormEmployeeComponent
  ]
})
export class AppRoutingModule { }
