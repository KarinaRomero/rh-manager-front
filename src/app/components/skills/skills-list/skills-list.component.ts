import { Component, OnInit } from '@angular/core';
import {SkillService} from '../services/skills.service';
import { Skill } from 'src/app/models/skill';

@Component({
  selector: 'app-skills-list',
  templateUrl: './skills-list.component.html',
  styleUrls: ['./skills-list.component.css'],
  providers:  [ SkillService ]
})
export class SkillsListComponent implements OnInit {

  skills: Skill[]
  constructor(private service: SkillService) { }

  ngOnInit() {
    this.getAllSkills();
  }

  getAllSkills(){
    this.service.getAllSkills().then(skills => this.skills = skills);
  }
}
