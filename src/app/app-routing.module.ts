import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from "./components/home/home.component";
import { HeaderComponent } from './components/header/header.component';
import { RegistryComponent } from './components/home/registry/registry.component';
import { LoginComponent } from './components/home/login/login.component';
import { FooterComponent } from './components/footer/footer.component';

import { EmployeesComponent } from './components/employees/employees.component';
import { FormEmployeeComponent } from './components/employees/components/form-employee/form-employee.component';

import { SkillsListComponent } from './components/skills/skills-list/skills-list.component';
import { SkillsDetailComponent } from './components/skills/skills-detail/skills-detail.component';

import { AuthGuard } from './guards/auth.guard';


const appRoutes: Routes = [
  { path: 'employees', component: EmployeesComponent, canActivate: [AuthGuard] },
  { path: 'employees-new', component: FormEmployeeComponent, canActivate: [AuthGuard] },
  { path: 'employees-new/:id', component: FormEmployeeComponent, canActivate: [AuthGuard] },
  { path: 'skills', component: SkillsListComponent, canActivate: [AuthGuard] },
  { path: 'skills-new', component: SkillsDetailComponent, canActivate: [AuthGuard] },
  { path: 'skills-new/:id', component: SkillsDetailComponent, canActivate: [AuthGuard] },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent }
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
    RouterModule,
    HeaderComponent
  ],
  declarations: [
    HeaderComponent,
    EmployeesComponent,
    HomeComponent,
    RegistryComponent,
    LoginComponent,
    FormEmployeeComponent,
    SkillsListComponent,
    SkillsDetailComponent,
    FooterComponent
  ],
  providers: []
})
export class AppRoutingModule { }
