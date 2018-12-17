import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Register } from '../../../models/register'
import { environment } from '../../../enviroment/enviroment'

@Injectable()
export class RegisterService {
  private apiRegistersUrl = environment.API_URL + 'api/v1/registers'
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' })

  constructor(private http: HttpClient) {}

  create(name:string): Promise<Register> {
    console.log(JSON.stringify({ name: name}))
    return this.http
      .post(
        this.apiRegistersUrl,
        JSON.stringify({ name: name}),
        { headers: this.headers }
      )
      .toPromise()
      .then(response => response)
      .catch(this.handleError)
  }

  private handleError(error: any): any {
    console.error('An error occurred', error)
    return Promise.reject(error.message || error)
  }
}
