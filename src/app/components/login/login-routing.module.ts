import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'login', redirectTo: 'login-menu' },
  { path: 'registry', redirectTo: 'registry-menu' },
  { path: 'login-menu', component: LoginComponent },
  { path: 'registry-menu', component: RegisterComponent }
  /*{ path: 'skills', redirectTo: '/skills-all' },
  { path: 'skills-add', redirectTo: '/skills-new' },
  { path: 'skills-update/id', redirectTo: '/skills-new/:id' },
  { path: 'skills-all',  component: SkillsListComponent },
  { path: 'skills-new',  component: SkillsDetailComponent },
  { path: 'skills-new/:id', component: SkillsDetailComponent }*/
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
