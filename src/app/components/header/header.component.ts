import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";
import { Angular2TokenService } from "angular2-token";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  //providers: [AuthService]
})
export class HeaderComponent implements OnInit {

  name = '';
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  logOut() {
    this.authService.logOutUser().subscribe(() => this.router.navigate(['/']))
  }

  getUserName()
  {
    if(this.authService.authService.currentUserData.name)
    {
        return this.authService.authService.currentUserData.name
    }

    return '';
  }

}
