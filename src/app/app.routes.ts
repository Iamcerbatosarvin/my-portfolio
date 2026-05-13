import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Profile } from './profile/profile';
import { Contact } from './contact/contact';
import { Projects } from './projects/projects';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'profile', component: Profile },
  { path: 'projects', component: Projects },
  { path: 'contact', component: Contact },
];
