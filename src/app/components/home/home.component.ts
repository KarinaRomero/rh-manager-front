import { Component, OnInit } from '@angular/core'
import { AuthGuard } from 'src/app/guards/auth.guard'
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isButtonActive: boolean
  activate = false

  constructor(private authGuard: AuthGuard, public router: Router) {
    this.isButtonActive = false
    this.activate = this.authGuard.canActivate()
    if (this.activate) {
      this.router.navigateByUrl('employees')
    }
  }

  ngOnInit() {}
  setT(active:Number) {
    if(active === 1) {
      this.isButtonActive = false;
    }
    if(active === 2) {
      this.isButtonActive = true;
    }
  }
}
