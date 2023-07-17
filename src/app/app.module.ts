import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './components/contact/contact.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ServicesComponent } from './components/services/services.component';
import { MeComponent } from './components/me/me.component';
import { OtherComponent } from './components/other/other.component';
import { CvComponent } from './components/cv/cv.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    ContactComponent,
    EducationComponent,
    ExperienceComponent,
    ServicesComponent,
    MeComponent,
    OtherComponent,
    CvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
