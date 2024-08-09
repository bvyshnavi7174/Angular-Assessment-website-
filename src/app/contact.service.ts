import { Injectable } from '@angular/core';
import emailjs from 'emailjs-com';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  serviceId(serviceId: any, templateId: any, contactForm: { name: string; email: string; subject: string; message: string; }, userId: any) {
    throw new Error('Method not implemented.');
  }
  templateId(serviceId: any, templateId: any, contactForm: { name: string; email: string; subject: string; message: string; }, userId: any) {
    throw new Error('Method not implemented.');
  }
  userId(serviceId: any, templateId: any, contactForm: { name: string; email: string; subject: string; message: string; }, userId: any) {
    throw new Error('Method not implemented.');
  }
  sendEmail(sendEmail: any) {
    throw new Error('Method not implemented.');
  }
  private serviceID = 'service_zy3qadt';
  private templateID = 'template_1xo6v4g';
  private userID = 'i6f2BNwdeHlpqEBks';

  constructor() { }

  sendContactEmail(formData: { name: string; email: string; subject: string; message: string }): Promise<any> {
    return emailjs.send(this.serviceID, this.templateID, formData, this.userID)
      .then(response => {
        return { success: true, message: 'Your message has been sent successfully!' };
      })
      .catch(error => {
        return { success: false, message: 'There was an error sending your message. Please try again.' };
      });
  }
}

