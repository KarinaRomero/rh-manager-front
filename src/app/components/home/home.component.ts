import { Component, OnInit } from '@angular/core';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  t: boolean;
  Change: string;
  activate = false;


  constructor(private authGuard:AuthGuard, public router: Router) {
    this.t = false;
    this.Change = 'Registar'
    this.activate = this.authGuard.canActivate();
    if(this.activate){
      this.router.navigateByUrl('employees')
    }
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
