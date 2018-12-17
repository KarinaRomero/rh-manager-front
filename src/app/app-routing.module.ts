import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes }  from '@angular/router';

import { EmployeesComponent } from './components/employees/employees.component';

const appRoutes: Routes = [
  {
    path: 'employees',
    component: EmployeesComponent
  },
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
    EmployeesComponent
  ]
})
export class AppRoutingModule { }
