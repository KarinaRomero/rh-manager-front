import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import {EmployeeService} from '../services/employees.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Skill } from 'src/app/models/skill';

@Component({
  selector: 'app-form-employee',
  templateUrl: './form-employee.component.html',
  styleUrls: ['./form-employee.component.css']
})
export class FormEmployeeComponent implements OnInit {
  public employee = new Employee();
  public response: any;
  public skills: Skill[];
  public skillsSelected: string[];
  selectedOption: Skill;
  constructor(
    private service: EmployeeService,
    public route: ActivatedRoute,
    public router: Router
  ) {
    this.route.params.subscribe((data: any) => {
      if (data && data.id) {
        console.log('print data' + data.id)
        this.service.getEmployee(data.id).then(employee => (this.employee = employee))
      } else {
        this.employee = new Employee()
      }
    })
    this.service.getAllSkills().then(skills => (this.skills = skills));
    this.response = ''
    this.skillsSelected = new Array(4);
  }

  ngOnInit() {}

  public onSubmit() {
    console.log('Adding a employee: ' + this.employee.name)
    if (this.employee.id) {
      this.service
        .update(this.employee)
        .then(response => (this.response = response))
      this.employee = new Employee()
      alert('Exito al editar')
      this.router.navigateByUrl('employees')
    } else {
      this.service
        .create(this.employee)
        .then(response => (this.response = response))
      this.employee = new Employee()
      alert(this.response)
    }
  }
  add(){
    console.log("My input: ", this.selectedOption);
    //this.skillsSelected.push(this.selectedOption);
  }
}
