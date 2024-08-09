import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResourcesComponent } from './resources.component';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ResourcesComponent', () => {
  let component: ResourcesComponent;
  let fixture: ComponentFixture<ResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResourcesComponent],
      schemas: [NO_ERRORS_SCHEMA] // To ignore unrecognized elements
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display resources', () => {
    // Provide test data with the required 'id' property
    component.resources = [
      { id: 1, title: 'Angular', description: 'A framework for building web apps', imageUrl: 'https://angular.io/assets/images/logos/angular/angular.png' },
      { id: 2, title: 'React', description: 'A library for building user interfaces', imageUrl: 'https://reactjs.org/logo-og.png' },
      { id: 3, title: 'Vue', description: 'A progressive framework for building UIs', imageUrl: 'https://vuejs.org/images/logo.png' }
    ];

    fixture.detectChanges();
    
    // Check if the resources are displayed correctly
    const resourceCards = fixture.debugElement.queryAll(By.css('.resource-card'));
    expect(resourceCards.length).toBe(3);

    // Check if each resource card displays the correct content
    resourceCards.forEach((card, index) => {
      const img = card.query(By.css('img')).nativeElement as HTMLImageElement;
      const h3 = card.query(By.css('h3')).nativeElement;
      const p = card.query(By.css('p')).nativeElement;

      expect(img.src).toContain(component.resources[index].imageUrl);
      expect(h3.textContent).toContain(component.resources[index].title);
      expect(p.textContent).toContain(component.resources[index].description);
    });
  });

  it('should render footer section', () => {
    const footer = fixture.debugElement.query(By.css('footer'));
    expect(footer).toBeTruthy();
    const contactSection = footer.query(By.css('.about'));
    expect(contactSection).toBeTruthy();
  });
});
