import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { SkillsComponent } from './components/skills/skills.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormEmployeeComponent } from './components/employees/components/form-employee/form-employee.component';
import { FormSkillComponent } from './components/skills/components/form-skill/form-skill.component';

const appRoutes: Routes = [
  {
    path: 'employees',
    component: EmployeesComponent
  },
  {
    path: 'skills',
    component: SkillsComponent,
    children: [
      {
        path: 'skills-add',
        component: FormSkillComponent
      }

    ]
  },
  {
    path: '',
    redirectTo: '/employees',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmployeesComponent,
    SkillsComponent,
    FooterComponent,
    FormEmployeeComponent,
    FormSkillComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
