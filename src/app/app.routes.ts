import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'resources', component: ResourcesComponent },
    { path: 'aboutus', component: AboutusComponent },
    { path: 'contactus', component: ContactusComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];
