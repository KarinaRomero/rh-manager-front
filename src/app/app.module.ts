import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { Router } from '@angular/router';

import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { SkillsComponent } from './components/skills/skills.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormEmployeeComponent } from './components/employees/components/form-employee/form-employee.component';
import { FormSkillComponent } from './components/skills/components/form-skill/form-skill.component';
import { AppRoutingModule } from './app-routing.module';
import { SkillsListComponent } from './components/skills-list/skills-list.component';
import { SkillsDetailComponent } from './components/skills-detail/skills-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmployeesComponent,
    SkillsComponent,
    FooterComponent,
    FormEmployeeComponent,
    FormSkillComponent,
    SkillsListComponent,
    SkillsDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {}
}
