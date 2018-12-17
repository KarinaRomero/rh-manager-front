import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/skill';
import {SkillService} from '../services/skills.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-skills-detail',
  templateUrl: './skills-detail.component.html',
  styleUrls: ['./skills-detail.component.css']
})
export class SkillsDetailComponent implements OnInit {
  public skill = new Skill();
  public response :any;
  constructor(private service: SkillService , public route : ActivatedRoute, public router : Router) {
    this.route.params.subscribe((data : any)=>{
      if(data && data.id){
        console.log("print data" + data.id);
        this.service.getSkill(data.id).then(skill => this.skill = skill)
      }
      else
      {
          this.skill = new Skill();
      }
      })
      this.response = "";
  }

  ngOnInit() {

  }

  public onSubmit() {
    console.log("Adding a skill: " + this.skill.name);
    if(this.skill.id) {
      this.service.update(this.skill).then(response => this.response = response);
      this.skill = new Skill();
      alert('Exito al editar');
      this.router.navigateByUrl('skills');
    } else {
      this.service.create(this.skill.name).then(response => this.response = response);
      this.skill = new Skill();
      alert(this.response);
    }
  }



}
