import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SkillsListComponent } from './skills-list/skills-list.component';
import { SkillsDetailComponent } from './skills-detail/skills-detail.component';

const routes: Routes = [
  { path: 'skills', redirectTo: '/skills-all' },
  { path: 'skills-add', redirectTo: '/skills-new' },
  { path: 'skill/:id', redirectTo: '/skill-update/:id' },
  { path: 'skills-all',  component: SkillsListComponent },
  { path: 'skills-new',  component: SkillsDetailComponent },
  { path: 'skill-update/:id', component: SkillsDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkillsRoutingModule { }
