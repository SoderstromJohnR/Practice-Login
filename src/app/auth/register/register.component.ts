import { Component } from '@angular/core';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { RegisterForm } from '../../types/auth';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  form: RegisterForm = {
    email: '',
    password: '',
    confirm_password: '',
  };

  constructor(private authService: AuthService) {}

  submit() {
    
  }

  isLoading() {
    return this.authService.isLoading;
  }
}