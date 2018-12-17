import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { Router } from '@angular/router';
import { EmployeeService } from './components/services/employees.service';
import { SkillService } from '../skills/services/skills.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers: [EmployeeService]
})
export class EmployeesComponent implements OnInit {

  employees: Employee[]

  constructor(private service: EmployeeService, public router: Router) { }

  ngOnInit() {
    this.getAllEmployees()
  }

  getAllEmployees() {
    this.service.getAllEmployees().then(employees => (this.employees = employees));
  }

  public update(id: string) {
    console.log('update : ' + id)
    this.router.navigateByUrl('employees-new/' + id)
  }

  public delete(id:string) {
    this.service.delete(id);
    this.employees = this.employees.filter((p,i)=>{
      if(Number(id) === p.id )
        {
        return false;
        }
        return true;
    }, this.employees);
  }
}
