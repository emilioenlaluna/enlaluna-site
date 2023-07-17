import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './components/projects/projects.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { CvComponent } from './components/cv/cv.component';
import { ContactComponent } from './components/contact/contact.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { MeComponent } from './components/me/me.component';
import { OtherComponent } from './components/other/other.component';
import { ServicesComponent } from './components/services/services.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: 'cv', component: CvComponent},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'education', component: EducationComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: '', component: HomeComponent },
  { path: 'me', component: MeComponent },
  
  { path: 'other', component: OtherComponent },
  { path: 'projects', component:ProjectsComponent  }, 
  { path: 'services', component:ServicesComponent  },
  { path: 'sign-in', component: SignInComponent },
  { path: '**', redirectTo: '/404' }, // Wildcard route
  { path: '404', component: NotFoundComponent }, // 404 route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
