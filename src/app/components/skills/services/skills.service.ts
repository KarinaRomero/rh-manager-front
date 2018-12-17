import {Injectable} from '@angular/core';
import {Headers, Http} from "@angular/http";
import { HttpModule } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import {Skill} from '../../../models/skill';
import {environment} from "../../../enviroment/enviroment";

@Injectable()
export class SkillService {

    private apiSkillsUrl = environment.API_URL+'api/v1/skills';
    private headers = new Headers({'Content-Type': 'application/json'});


    constructor(private http: HttpClient){ }

    getAllSkills() : Promise<Skill[]> {
      return this.http.get(this.apiSkillsUrl+'/')
        .toPromise()
        .then(response => response as Skill[])
        .catch(this.handleError);
    }

    private handleError(error: any): any {
      console.error('An error occurred', error);
      return Promise.reject(error.message || error);
    }

  }