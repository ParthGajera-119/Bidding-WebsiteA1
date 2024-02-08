import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // Hardcoded credentials
  private readonly hardcodedEmail = 'parth@gmail.com';
  private readonly hardcodedPassword = '12345';

  // Message to display to the user
  message = '';

  constructor() {}

  onSubmit(loginForm: NgForm) {
    if (loginForm.valid) {
      const email = loginForm.value.email;
      const password = loginForm.value.password;

      // Check credentials
      if (email === this.hardcodedEmail && password === this.hardcodedPassword) {
        this.message = 'You are successfully logged in!';
      } else {
        this.message = 'Incorrect email or password. Please try again.';
      }
    } else {
      this.message = 'Please fill in all required fields.';
      this.validateAllFormFields(loginForm);
    }
  }

  validateAllFormFields(form: NgForm) {
    Object.keys(form.controls).forEach(field => {
      const control = form.controls[field];
      control.markAsTouched();
    });
  }
}
