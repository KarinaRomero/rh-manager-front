import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Employee } from '../../../../models/employee'
import { Skill } from '../../../../models/skill'
import { environment } from '../../../../enviroment/enviroment'

@Injectable()
export class EmployeeService {
  private apiSkillsUrl = environment.API_URL + 'api/v1/skills'
  private apiEmployeesUrl = environment.API_URL + 'api/v1/employees'
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' })

  constructor(private http: HttpClient) {}

  create(employee:Employee): Promise<Employee> {
    console.log(JSON.stringify({ id_employee: employee.id_employee, name: employee.name, age: employee.age, job: employee.job, adress:employee.adress}))
    return this.http
      .post(
        this.apiEmployeesUrl,
        JSON.stringify({ id_employee: employee.id_employee, name: employee.name, age: employee.age, job: employee.job, adress:employee.adress}),
        { headers: this.headers }
      )
      .toPromise()
      .then(response => response)
      .catch(this.handleError)
  }
  delete(id:any){
    return this.http.delete(this.apiEmployeesUrl+ '/'+id, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);

  }
  update(employee:Employee){
    return this.http
      .put(this.apiEmployeesUrl+ '/'+employee.id, JSON.stringify(employee), {headers:this.headers})
      .toPromise()
      .then(response => response)
      .catch(this.handleError);
  }
  getEmployee(id:any): Promise<Employee> {
    return this.http
      .get(this.apiEmployeesUrl + '/'+id)
      .toPromise()
      .then(response => response as Employee)
      .catch(this.handleError)
  }
  getAllEmployees(): Promise<Employee[]> {
    return this.http
      .get(this.apiEmployeesUrl + '/')
      .toPromise()
      .then(response => response as Employee[])
      .catch(this.handleError)
  }
  getAllSkills(): Promise<Skill[]> {
    return this.http
      .get(this.apiSkillsUrl + '/')
      .toPromise()
      .then(response => response as Skill[])
      .catch(this.handleError)
  }

  private handleError(error: any): any {
    console.error('An error occurred', error)
    return Promise.reject(error.message || error)
  }
}
