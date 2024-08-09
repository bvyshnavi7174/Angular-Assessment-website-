import { Component } from '@angular/core';
import { ContactService } from '../../contact.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})
export class ContactusComponent {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
  message: string | null = null;

  constructor(private contactService: ContactService) { }

  sendEmail(): void {
    this.contactService.sendContactEmail(this.formData)
      .then(response => {
        this.message = response.message;
        if (response.success) {
          this.formData = { name: '', email: '', subject: '', message: '' };
        }
      })
      .catch(error => {
        this.message = 'There was an error sending your message. Please try again.';
      });
  }
}
