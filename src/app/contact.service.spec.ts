import { TestBed } from '@angular/core/testing';
import { ContactService } from './contact.service';
import emailjs from 'emailjs-com';

describe('ContactService', () => {
  let service: ContactService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactService]
    });
    service = TestBed.inject(ContactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send email successfully', async () => {
    const formData = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      subject: 'Test Subject',
      message: 'Test Message'
    };

    const emailjsSpy = spyOn(emailjs, 'send').and.returnValue(Promise.resolve({
      status: 200,
      text: 'OK'
    }));

    const response = await service.sendContactEmail(formData);
    
    expect(emailjsSpy).toHaveBeenCalledWith(
      service['serviceID'],
      service['templateID'],
      formData,
      service['userID']
    );
    expect(response).toEqual({ success: true, message: 'Your message has been sent successfully!' });
  });

  it('should handle email sending failure', async () => {
    const formData = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      subject: 'Test Subject',
      message: 'Test Message'
    };

    const emailjsSpy = spyOn(emailjs, 'send').and.returnValue(Promise.reject({
      status: 500,
      text: 'Internal Server Error'
    }));

    const response = await service.sendContactEmail(formData);
    
    expect(emailjsSpy).toHaveBeenCalledWith(
      service['serviceID'],
      service['templateID'],
      formData,
      service['userID']
    );
    expect(response).toEqual({ success: false, message: 'There was an error sending your message. Please try again.' });
  });
});
