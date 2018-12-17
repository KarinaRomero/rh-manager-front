import { Component, OnInit } from '@angular/core';
import { Register } from 'src/app/models/register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register: Register;
  password: string;
  constructor() {
    this.register = new Register();
    this.password = '';
  }

  ngOnInit() {
  }

}
