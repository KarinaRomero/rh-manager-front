import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Login } from '../../../models/login'
import { environment } from '../../../enviroment/enviroment'

@Injectable()
export class LoginService {
  private apiLoginsUrl = environment.API_URL + 'api/v1/logins'
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' })

  constructor(private http: HttpClient) {}

  create(name:string): Promise<Login> {
    console.log(JSON.stringify({ name: name}))
    return this.http
      .post(
        this.apiLoginsUrl,
        JSON.stringify({ name: name}),
        { headers: this.headers }
      )
      .toPromise()
      .then(response => response)
      .catch(this.handleError)
  }

  getLogin(id:any): Promise<Login> {
    return this.http
      .get(this.apiLoginsUrl + '/'+id)
      .toPromise()
      .then(response => response as Login)
      .catch(this.handleError)
  }

  private handleError(error: any): any {
    console.error('An error occurred', error)
    return Promise.reject(error.message || error)
  }
}
