import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.css']
})
export class RegistryComponent implements OnInit {

  @Output() onFormResult = new EventEmitter<any>();

  confirmation = '^([A-ZÑ\x26]{3,4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1]))([A-Z\d]{3})?$ /'
  userLogin = {
    email: '',
    password: '',
    passwordConfirmation: ''
  };

  constructor(private authSerivce:AuthService) {

  }

  ngOnInit() {

  }
  onSubmit(){
    this.authSerivce.registerUser(this.userLogin).subscribe(

      (res) => {

        if (res.status === 200) {
          this.onFormResult.emit({signedUp: true, res});
        }

      },

      (err) => {
        console.log(err.json());
        this.onFormResult.emit({signedUp: false, err});
      }
  );
  }
}
