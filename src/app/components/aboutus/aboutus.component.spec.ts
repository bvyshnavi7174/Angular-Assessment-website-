import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutusComponent } from './aboutus.component';

describe('AboutusComponent', () => {
  let component: AboutusComponent;
  let fixture: ComponentFixture<AboutusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutusComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AboutusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the AboutusComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should render the mission statement', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const missionElement = compiled.querySelector('.mission-statement h3');
    expect(missionElement?.textContent).toContain('Our Mission');
  });

  it('should display team member names', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const teamMembers = compiled.querySelectorAll('.team-member h4');
    const expectedNames = ['John Doe', 'Jane Smith', 'Alice Johnson', 'Bob Lee'];

    teamMembers.forEach((teamMember, index) => {
      expect(teamMember.textContent).toContain(expectedNames[index]);
    });
  });

  it('should have the contact info section', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const contactInfoElement = compiled.querySelector('.contact-info h3');
    expect(contactInfoElement?.textContent).toContain('Contact Us');
  });

  xit('should render the email address in the contact info', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const emailElement = compiled.querySelector('.contact-info p strong');
    expect(emailElement?.textContent).toContain('contact@edutech.com');
  });

  it('should render the footer contact info', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const footerContact = compiled.querySelector('footer .about h3');
    expect(footerContact?.textContent).toContain('Contact Us');
  });
});
