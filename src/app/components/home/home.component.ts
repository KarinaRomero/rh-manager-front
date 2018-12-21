import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  t: boolean;
  Change: string;


  constructor() {
    this.t = false;
    this.Change = 'Registar'
  }

  ngOnInit() {
  }
  setT(){
    if(this.t == false)
    {
      this.t=true;
      this.Change = 'Login'
    } else {
      this.Change = 'Registar'
      this.t= false;
    }

  }

}
