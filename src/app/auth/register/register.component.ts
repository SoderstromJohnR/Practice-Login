import { Component } from '@angular/core';
import { LoginForm } from '../../types/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  form: LoginForm = {
    email: '',
    password: '',
    confirm_password: '',
  };

  submit() {
    alert(this.form);
  }
}
