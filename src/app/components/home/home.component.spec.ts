import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { By } from '@angular/platform-browser';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display welcome message', () => {
    const h2 = fixture.debugElement.query(By.css('.intro h2')).nativeElement;
    expect(h2.textContent).toContain('Welcome to EduTech');
    
    const introParagraphs = fixture.debugElement.queryAll(By.css('.intro p'));
    expect(introParagraphs.length).toBe(2);
    
    const paragraphTexts = introParagraphs.map(p => p.nativeElement.textContent.trim());
    expect(paragraphTexts[0]).toContain('EduTech is revolutionizing the way education is delivered and experienced.');
    expect(paragraphTexts[1]).toContain('Through cutting-edge technology and interactive platforms, we offer a range of educational tools and resources designed to enhance the learning experience.');
  });

  it('should display images in the gallery', () => {
    const images = fixture.debugElement.queryAll(By.css('.image-gallery img'));
    expect(images.length).toBe(3);

    const expectedSrcs = [
      'assets/edutech.jpg',
      'assets/interactive.jpg',
      'assets/qa.jpg'
    ];
    
    images.forEach((img, index) => {
      expect(img.nativeElement.getAttribute('src')).toContain(expectedSrcs[index]);
    });
  });

  it('should display the about section', () => {
    const aboutSection = fixture.debugElement.query(By.css('.about'));
    expect(aboutSection).toBeTruthy();
    
    const h3 = aboutSection.query(By.css('h3')).nativeElement;
    expect(h3.textContent).toContain('About Us');
    
    const paragraphs = aboutSection.queryAll(By.css('p'));
    expect(paragraphs.length).toBe(4);

    const paragraphTexts = paragraphs.map(p => p.nativeElement.textContent.trim());
    expect(paragraphTexts[0]).toContain('EduTech was founded with the goal of transforming education through technology.');
    expect(paragraphTexts[1]).toContain('With a diverse range of products and services, we are committed to supporting learners and educators in achieving their goals.');
    expect(paragraphTexts[2]).toContain('Below you can find the link for our demo classes:-');
    expect(paragraphTexts[3]).toContain('Explore our Demo');
  });

  it('should display footer section', () => {
    const footer = fixture.debugElement.query(By.css('footer'));
    expect(footer).toBeTruthy();
    
    const contactSection = footer.query(By.css('.about'));
    expect(contactSection).toBeTruthy();
    
    const h3 = contactSection.query(By.css('h3')).nativeElement;
    expect(h3.textContent).toContain('Contact Us');
    
    const paragraphs = contactSection.queryAll(By.css('p'));
    expect(paragraphs.length).toBe(4);

    const paragraphTexts = paragraphs.map(p => p.nativeElement.textContent.trim());
    expect(paragraphTexts[0]).toContain('We would love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out to us.');
    expect(paragraphTexts[1]).toContain('Email: contact@edutech.com');
    expect(paragraphTexts[2]).toContain('Phone: +1 (555) 123-4567');
    expect(paragraphTexts[3]).toContain('Address: 123 Learning Lane, Knowledge City, CA 90210');
  });
});
