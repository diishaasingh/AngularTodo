import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Users {
  username: string;
  password: string;
}

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})

export class SignUpFormComponent {
  users: Users[] = [];

  @ViewChild('taskForm', { static: false }) taskForm!: NgForm;

  submit() {
    const username = this.taskForm.value.username;
    const password = this.taskForm.value.password;
    const confirmPassword = this.taskForm.value.confirmPassword;

    if (password !== confirmPassword) {
      alert("Password and confirm password fields do not match.");
      return;
    }

    if (!this.isUsernameExist()) {
      this.users.push({ username, password });
      console.log(this.users);
      alert("Sign up successful!");
      this.taskForm.reset();
    }
  }

  isUsernameExist() {
    const email = this.taskForm.value.email;
    return this.users.some(user => user.username === email);
  }
}
