import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the header component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the logo text as "EDUTECH"', () => {
    const logoElement = fixture.debugElement.query(By.css('.logo')).nativeElement;
    expect(logoElement.textContent).toContain('EDUTECH');
  });

  it('should toggle the menu when the menu icon is clicked', () => {
    const menuIcon = fixture.debugElement.query(By.css('.menu-icon')).nativeElement;
    menuIcon.click();
    fixture.detectChanges();
    expect(component.menuActive).toBeTrue();
  });

  it('should close the menu when a navigation link is clicked', () => {
    component.menuActive = true;
    fixture.detectChanges();
    const navLink = fixture.debugElement.query(By.css('nav ul li a')).nativeElement;
    navLink.click();
    fixture.detectChanges();
    expect(component.menuActive).toBeFalse();
  });

  it('should have the "active" class applied to the nav when menuActive is true', () => {
    component.menuActive = true;
    fixture.detectChanges();
    const navElement = fixture.debugElement.query(By.css('nav')).nativeElement;
    expect(navElement.classList).toContain('active');
  });

  it('should not have the "active" class applied to the nav when menuActive is false', () => {
    component.menuActive = false;
    fixture.detectChanges();
    const navElement = fixture.debugElement.query(By.css('nav')).nativeElement;
    expect(navElement.classList).not.toContain('active');
  });
});
