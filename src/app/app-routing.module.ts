import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes }  from '@angular/router';

import { EmployeesComponent } from './components/employees/employees.component';
import { FormEmployeeComponent } from './components/employees/components/form-employee/form-employee.component';

const appRoutes: Routes = [
  { path: 'employees', redirectTo: '/employees-all' },
  { path: 'employees-add', redirectTo: '/employees-new' },
  { path: 'employee/:id', redirectTo: '/employee-update/:id' },
  { path: 'employees-all',  component: EmployeesComponent },
  { path: 'employees-new',  component: FormEmployeeComponent },
  { path: 'employee-update/:id', component: FormEmployeeComponent },
  {
    path: '',
    redirectTo: '/employees',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
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
