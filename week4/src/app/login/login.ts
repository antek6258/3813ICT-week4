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

  users = [
    {
      email: 'anna@test.com',
      password: '1234'
    },
    {
      email: 'otter@email.com',
      password: 'password'
    },
    {
      email: 'admin@test.com',
      password: 'admin'
    }
  ];

  constructor(private router: Router) {}

  login() {

    const user = this.users.find(
      user => user.email === this.email &&
              user.password === this.password
    );

    if (user) {

      this.router.navigate(['/profile']);

    } else {

      this.errorMessage = 'Invalid email or password. Please try again.';

    }

  }

}
