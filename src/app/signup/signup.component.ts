import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  successMessage = '';
  passwordMismatch = false; // New property

  constructor() {}

  onSubmit(signupForm: NgForm) {
    if (signupForm.valid) {
      if (this.isPasswordMismatch(signupForm)) {
        this.passwordMismatch = true;
        this.successMessage = '';
        return;
      }

      console.log('Form Data: ', signupForm.value);
      this.successMessage = 'You have successfully registered!';
      this.passwordMismatch = false;
      // Here you would typically handle the form submission to your backend
    } else {
      this.validateAllFormFields(signupForm);
      this.successMessage = '';
      this.passwordMismatch = false;
    }
  }

  isPasswordMismatch(form: NgForm): boolean {
    const password = form.value.password;
    const confirmPassword = form.value.confirmPassword;
    return password !== confirmPassword;
  }

  validateAllFormFields(form: NgForm) {
    Object.keys(form.controls).forEach(field => {
      const control = form.controls[field];
      control.markAsTouched();
    });
  }
}
