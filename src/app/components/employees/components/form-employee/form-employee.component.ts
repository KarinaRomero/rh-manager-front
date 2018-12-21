import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from '../../../../services/employees.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-employee',
  templateUrl: './form-employee.component.html',
  styleUrls: ['./form-employee.component.css']
})
export class FormEmployeeComponent implements OnInit {

  employee = new Employee();
  response: any;

  skillSelected = 0;
  skillsSelected = [];
  skills = [];
  names =[];

  constructor(
    private service: EmployeeService,
    public route: ActivatedRoute,
    public router: Router
  ) {
    this.route.params.subscribe((data: any) => {
      if (data && data.id) {
        this.service.getEmployee(data.id).then(employee => {
          this.employee = employee;
          this.loadSkills();
          /*this.service.getSkillsByEmployee(data.id).then(skills => {
            this.skillsSelected = skills;
          })*/
        })
      } else {
        this.loadSkills();
      }
    })
  }

  ngOnInit() {}

  public onSubmit() {
    console.log('Adding a employee: ' + this.employee.name)
    if (this.employee.id) {
      this.updateEmployee();
    } else {
      this.createEmployee();
    }
  }

  chageSkill(e: any) {
    let temp = Number(e.value);
    if ( temp > 0) {
      this.skillSelected = temp;
    } else {
      this.skillSelected = 0;
    }
  }

  addSkills() {
    if (this.skillSelected && !this.skillsSelected.includes(this.skillSelected)) {
      this.skillsSelected.push(this.skillSelected);
      this.updateNames();
    } else {
      alert('Ya se ha asignado este conocimiento!')
    }
  }
  clearData() {
    this.employee = new Employee();
    this.skillSelected = 0;
    this.skillsSelected = [];
    this.names = [];
  }

  deleteSkills(name:any) {
    console.log(name);
    if(this.names.includes(name)){
      this.skills.forEach(skill => {
        if (!(skill.name).localeCompare(name)){

          let indexNames = this.names.indexOf(skill.name);
          let indexSelected = this.skillsSelected.indexOf(skill.id);

          this.names.splice(indexNames, 1);
          this.skillsSelected.splice(indexSelected, 1);
        }
      });
    }
  }

  updateNames() {
    this.skills.forEach(skill =>{
      if(this.skillsSelected.includes(skill.id) && !this.names.includes(skill.name)){
        this.names.push(skill.name);
      }
    })
  }

  updateEmployee() {
    this.employee.skill_ids = this.skillsSelected;
    this.service
      .update(this.employee)
      .then(response => (this.response = response))
    this.clearData();
    alert(this.response)
    this.router.navigateByUrl('employees')
  }

  createEmployee() {
    this.employee.skill_ids = this.skillsSelected;
    this.service
      .create(this.employee)
      .then(response => (this.response = response))
    this.clearData();
    alert(this.response)
  }

  loadSkills(){
    this.service.getAllSkills().then(skills => (this.skills = skills)).then();
    this.response = '';

  }
}
