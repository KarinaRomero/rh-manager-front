import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsRoutingModule } from './skills-routing.module';

import { SkillsListComponent } from './skills-list/skills-list.component';
import { SkillsDetailComponent } from './skills-detail/skills-detail.component';

import {SkillService} from './services/skills.service';

@NgModule({
  imports: [
    CommonModule,
    SkillsRoutingModule
  ],
  declarations: [
    SkillsListComponent,
    SkillsDetailComponent
  ],
  providers: [
    SkillService
  ]
})
export class SkillsModule { }
