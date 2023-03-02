import { Component } from '@angular/core';
import { LoginForm } from '../../types/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: LoginForm = {
    email: '',
    password: '',
    confirm_password: '',
  };

  submit() {
    alert(this.form);
  }
}
