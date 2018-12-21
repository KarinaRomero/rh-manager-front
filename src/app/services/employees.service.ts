import { Injectable } from '@angular/core'
import { Employee } from '../models/employee'
import { Skill } from '../models/skill'
import { Angular2TokenService } from 'angular2-token'

@Injectable()
export class EmployeeService {
  private apiSkillsUrl = 'api/v1/skills'
  private apiEmployeesUrl = 'api/v1/employees/'
  private apiAssignametsUrl = 'api/v1/assignments'

  constructor(public authService: Angular2TokenService) {}

  create(employee: Employee): Promise<Employee> {
    return this.authService
      .post(
        this.apiEmployeesUrl,
        JSON.stringify({
          key: employee.key,
          name: employee.name,
          age: employee.age,
          job: employee.job,
          adress: employee.adress,
          skill_ids: employee.skill_ids
        })
      )
      .toPromise()
      .then(response => response)
      .catch(this.handleError)
  }
  delete(id: any) {
    return this.authService
      .delete(this.apiEmployeesUrl + '/' + id)
      .toPromise()
      .then(response => response)
      .catch(this.handleError)
  }
  update(employee: Employee): Promise<Employee> {
    return this.authService
      .put(this.apiEmployeesUrl + '/' + employee.id, JSON.stringify(employee))
      .toPromise()
      .then(response => JSON.parse(response['_body']) as Employee)
      .catch(this.handleError)
  }
  getEmployee(id: any): Promise<Employee> {
    return this.authService
      .get(this.apiEmployeesUrl + '/' + id)
      .toPromise()
      .then(response => JSON.parse(response['_body']) as Employee)
      .catch(this.handleError)
  }
  getAllEmployees(): Promise<Employee[]> {
    return this.authService
      .get(this.apiEmployeesUrl)
      .toPromise()
      .then(response => JSON.parse(response['_body']) as Employee[])
      .catch(this.handleError)
  }


  createSkill(name: string): Promise<Skill> {
    return this.authService
      .post(
        this.apiSkillsUrl,
        JSON.stringify({
          name: name
        })
      )
      .toPromise()
      .then(response => response)
      .catch(this.handleError)
  }
  updateSkill(skill: Skill): Promise<Skill> {
    return this.authService
      .put(this.apiSkillsUrl + '/' + skill.id, JSON.stringify(skill))
      .toPromise()
      .then(response => JSON.parse(response['_body']) as Skill)
      .catch(this.handleError)
  }
  getSkill(id: any): Promise<Skill> {
    return this.authService
      .get(this.apiSkillsUrl + '/' + id)
      .toPromise()
      .then(response => JSON.parse(response['_body']) as Skill)
      .catch(this.handleError)
  }
  getAllSkills(): Promise<Skill[]> {
    return this.authService
      .get(this.apiSkillsUrl)
      .toPromise()
      .then(response => JSON.parse(response['_body']) as Skill[])
      .catch(this.handleError)
  }

  getSkillsByEmployee(id:any): Promise<Skill[]>{
    return this.authService
      .get(this.apiSkillsUrl+'/'+id+'/edit')
      .toPromise()
      .then(response => JSON.parse(response['_body']) as Skill[])
      .catch(this.handleError)
  }


  private handleError(error: any): any {
    console.error('An error occurred', error)
    return Promise.reject(error.message || error)
  }
}
