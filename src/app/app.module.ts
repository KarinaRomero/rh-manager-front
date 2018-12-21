import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Angular2TokenService } from 'angular2-token';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { EmployeeService } from './services/employees.service';
import { ComparePasswordDirective } from './directives/compare-password.directive';

@NgModule({
  declarations: [
    AppComponent,
    ComparePasswordDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
  ],
  exports:[FormsModule],
  providers: [
    EmployeeService,
    Angular2TokenService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {}
}
