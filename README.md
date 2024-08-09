# Assessment

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


1. Project Setup and Configuration

1.1. Initialize Angular Project

Create a new Angular project if not already created.
Set up basic project structure.

1.2. Install Dependencies

Install necessary Angular packages and libraries (e.g., Angular Material, EmailJS).
Install and configure any additional libraries or tools.

2. Routing Setup
2.1. Create Routing Module

Generate app-routing.module.ts.
Define routes for Home, Resources, About Us, and Contact.

2.2. Update app.module.ts

Import AppRoutingModule.
Add necessary components to declarations.

2.3. Add Router Outlet

Update app.component.html to include <router-outlet>.

2.4. Set Up Navigation

Update header component to include routerLink for navigation.

3. Component Development
3.1. Home Component

3.1.1. Create home.component.ts and home.component.html.
3.1.2. Implement content section (intro, images, about).
3.1.3. Add styling in home.component.css.
3.1.4. Add background image using CSS.

3.2. Resources Component

3.2.1. Create resources.component.ts and resources.component.html.
3.2.2. Design resource cards with image, title, and description.
3.2.3. Style cards in resources.component.css.

3.3. About Us Component

3.3.1. Create about-us.component.ts and about-us.component.html.
3.3.2. Add content including mission statement, team members, and contact information.
3.3.3. Style the component in about-us.component.css.

3.4. Contact Component

3.4.1. Create contact.component.ts and contact.component.html.
3.4.2. Implement the contact form with fields for name, email, subject, and message.
3.4.3. Style the form in contact.component.css.
3.4.4. Create contact.service.ts for handling form submission using EmailJS.

4. EmailJS Integration
4.1. Install EmailJS

Install EmailJS library (emailjs-com).

4.2. Configure EmailJS

Create and configure EmailJS service and templates.
Obtain API keys and service IDs.

4.3. Implement Contact Service

Create contact.service.ts to handle form submissions.

4.4. Test Form Submission

Verify email delivery and error handling.
Ensure success confirmation message is displayed.

5. Testing and Debugging
5.1. Component Testing

Test each component individually for functionality and design.
Ensure responsiveness and correct display of content.

5.2. Routing Testing

Test navigation between pages.
Check for proper URL handling and page display.

5.3. Form Testing

Test form submission functionality.
Validate email delivery and handle errors.

