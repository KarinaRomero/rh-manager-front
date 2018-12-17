import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Skill } from '../../../models/skill'
import { environment } from '../../../enviroment/enviroment'

@Injectable()
export class SkillService {
  private apiSkillsUrl = environment.API_URL + 'api/v1/skills'
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' })

  constructor(private http: HttpClient) {}

  create(name:string): Promise<Skill> {
    console.log(JSON.stringify({ name: name}))
    return this.http
      .post(
        this.apiSkillsUrl,
        JSON.stringify({ name: name}),
        { headers: this.headers }
      )
      .toPromise()
      .then(response => response)
      .catch(this.handleError)
  }
  update(skill:Skill){
    return this.http
      .put(this.apiSkillsUrl+ '/'+skill.id, JSON.stringify(skill), {headers:this.headers})
      .toPromise()
      .then(response => response)
      .catch(this.handleError);
  }
  getSkill(id:any): Promise<Skill> {
    return this.http
      .get(this.apiSkillsUrl + '/'+id)
      .toPromise()
      .then(response => response as Skill)
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
