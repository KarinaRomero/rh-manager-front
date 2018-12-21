import { Component, OnInit, Output, EventEmitter } from '@angular/core'
import { Router } from '@angular/router'
import { AuthService } from 'src/app/services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() onFormResult = new EventEmitter<any>()

  loading: boolean
  returnUrl: string
  userLogin = {
    email: '',
    password: ''
  }
  hero = "";

  constructor(public authService: AuthService, private router: Router) {}
  ngOnInit() {}

  public onSubmit() {
    this.authService.logInUser(this.userLogin).subscribe(
      res => {
        if (res.status == 200) {
          this.onFormResult.emit({ signedIn: true, res })
        }
      },
      err => {
        console.log('err:', err)
        this.onFormResult.emit({ signedIn: false, err })
      }
    )
  }

}
