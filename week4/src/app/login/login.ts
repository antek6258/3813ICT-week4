import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  email = '';
  password = '';

  errorMessage = '';

  constructor(private router: Router) {}

  async login() {

    const response = await fetch('http://localhost:3000/api/auth', {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify({
        email: this.email,
        password: this.password
      })
    });

    const user = await response.json();

    if (user.valid) {

      localStorage.setItem('user', JSON.stringify(user));

      this.router.navigate(['/profile']);

    } else {

      this.errorMessage = 'Email or password is incorrect';

    }
  }
}