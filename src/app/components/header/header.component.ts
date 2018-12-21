import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {Angular2TokenService} from "angular2-token";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [AuthService]
})
export class HeaderComponent implements OnInit {

  @Output() featureSelected = new EventEmitter<string>();

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit() {
  }

  onSelect(feature: string){
      this.featureSelected.emit(feature);
  }

  logOut(){
    this.authService.logOutUser().subscribe(() => this.router.navigate(['/']))
  }

}
