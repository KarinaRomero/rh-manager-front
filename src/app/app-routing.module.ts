import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes }  from '@angular/router';

import { EmployeesComponent } from './components/employees/employees.component';

import { SkillsComponent } from './components/skills/skills.component';

const appRoutes: Routes = [
  {
    path: 'employees',
    component: EmployeesComponent
  },
  {
    path: 'skills',
    component: SkillsComponent/*,
     children: [
      {
        path: 'skills-add',
        component: FormSkillComponent
      }

    ]*/
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
  declarations: []
})
export class AppRoutingModule { }
