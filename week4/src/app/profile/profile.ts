import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  imports: [FormsModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile implements OnInit {

  user: any = null;
  editing = false;

  constructor(private router: Router) {}

  ngOnInit() {

    const storedUser = localStorage.getItem('user');

    if (storedUser) {

      this.user = JSON.parse(storedUser);

    } else {

      this.router.navigate(['/login']);

    }

  }

  saveProfile() {

    localStorage.setItem('user', JSON.stringify(this.user));
    this.editing = false;

  }

}

