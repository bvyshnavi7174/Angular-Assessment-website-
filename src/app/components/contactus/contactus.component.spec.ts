import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { of, throwError } from 'rxjs';
import { ContactusComponent } from './contactus.component';
import { ContactService } from '../../contact.service';

describe('ContactusComponent', () => {
  let component: ContactusComponent;
  let fixture: ComponentFixture<ContactusComponent>;
  let contactServiceSpy: jasmine.SpyObj<ContactService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('ContactService', ['sendContactEmail']);

    await TestBed.configureTestingModule({
      imports: [FormsModule, ContactusComponent],
      providers: [{ provide: ContactService, useValue: spy }]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ContactusComponent);
    component = fixture.componentInstance;
    contactServiceSpy = TestBed.inject(ContactService) as jasmine.SpyObj<ContactService>;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have initial formData values as empty strings', () => {
    expect(component.formData).toEqual({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  });

  it('should call sendEmail method when form is submitted', () => {
    spyOn(component, 'sendEmail');
    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    expect(component.sendEmail).toHaveBeenCalled();
  });

  it('should reset formData and set success message on successful email send', async () => {
    const responseMock = { success: true, message: 'Email sent successfully!' };
    contactServiceSpy.sendContactEmail.and.returnValue(Promise.resolve(responseMock));

    component.sendEmail();

    fixture.whenStable().then(() => {
      expect(contactServiceSpy.sendContactEmail).toHaveBeenCalledWith(component.formData);
      expect(component.formData).toEqual({ name: '', email: '', subject: '', message: '' });
      expect(component.message).toBe(responseMock.message);
    });
  });

  it('should set error message on failed email send', async () => {
    contactServiceSpy.sendContactEmail.and.returnValue(Promise.reject('error'));

    component.sendEmail();

    fixture.whenStable().then(() => {
      expect(contactServiceSpy.sendContactEmail).toHaveBeenCalledWith(component.formData);
      expect(component.message).toBe('There was an error sending your message. Please try again.');
    });
  });

  it('should display the message when message property is set', () => {
    component.message = 'Test message';
    fixture.detectChanges();
    const messageElement = fixture.debugElement.nativeElement.querySelector('p');
    expect(messageElement.textContent).toContain('Test message');
  });
});
