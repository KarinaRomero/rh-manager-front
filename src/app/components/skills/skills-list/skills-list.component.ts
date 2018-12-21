import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
//import { SkillService } from '../services/skills.service'
import { Skill } from 'src/app/models/skill'
import { EmployeeService } from '../../../services/employees.service';


@Component({
  selector: 'app-skills-list',
  templateUrl: './skills-list.component.html',
  styleUrls: ['./skills-list.component.css']
})
export class SkillsListComponent implements OnInit {
  skills: Skill[]
  constructor(private service: EmployeeService/*private service: SkillService*/, public router: Router) {}

  ngOnInit() {
    this.getAllSkills()
  }

  getAllSkills() {
    this.service.getAllSkills().then(skills => (this.skills = skills))
  }

  public update(id: string) {
    console.log('update : ' + id)
    this.router.navigateByUrl('skills-new/' + id)
  }
}
