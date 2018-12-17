import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsRoutingModule } from './skills-routing.module';

import { SkillsListComponent } from './skills-list/skills-list.component';
import { SkillsDetailComponent } from './skills-detail/skills-detail.component';

@NgModule({
  imports: [
    CommonModule,
    SkillsRoutingModule
  ],
  declarations: [
    SkillsListComponent,
    SkillsDetailComponent
  ]
})
export class SkillsModule { }
