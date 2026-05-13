import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  private fb = inject(FormBuilder);
  contactForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
  });
  isSubmitting = false;
  submitMessage = '';

  onSubmit() {
    if (this.contactForm.invalid) {
      this.submitMessage = 'Please fill in all required fields correctly.';
      return;
    }

    const { name, email, message } = this.contactForm.value;
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    const mailtoUrl = `mailto:arvinjhaycerbatos@gmail.com?subject=${subject}&body=${body}`;

    if (typeof window !== 'undefined') {
      this.isSubmitting = true;
      window.location.href = mailtoUrl;
      this.submitMessage = 'Your email client should open now. If it does not, please use the contact details on the right.';
      this.isSubmitting = false;
    } else {
      this.submitMessage = 'Unable to open email client from this environment.';
    }
  }
}
