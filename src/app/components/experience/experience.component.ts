import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Experience } from 'src/app/shared/services/experience'; // Importar la interfaz Experience
import { ExperienceService } from 'src/app/shared/services/experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  public experienceForm: FormGroup = this.fb.group({
    company: ['', Validators.required],
    position: ['', Validators.required],
    startDate: ['', Validators.required],
    endDate: ['', Validators.required],
    description: ['', Validators.required],
    imagen: ['', Validators.required],
  });

  constructor(public auth: AuthService, private fb: FormBuilder, private experienceService: ExperienceService) {}

  get company() {
    return this.experienceForm.get('company');
  }
  get position() {
    return this.experienceForm.get('position');
  }
  get startDate() {
    return this.experienceForm.get('startDate');
  }
  get endDate() {
    return this.experienceForm.get('endDate');
  }
  get description() {
    return this.experienceForm.get('description');
  }
  get imagen() {
    return this.experienceForm.get('imagen');
  }

  ResetForm() {
    this.experienceForm.reset();
  }

  submitExperienceData() {
    this.experienceService.AddExperience(this.experienceForm.value);
    this.ResetForm();
    this.getExperiences();
  }

  experiences: Experience[] = [];

  ngOnInit() {
    this.getExperiences();
  }

  getExperiences() {
    this.experienceService.GetExperiencesList().subscribe((experiences) => {
      this.experiences = experiences;
    });
  }

  deleteExperience(experienceId: string | any) {
    this.experienceService.deleteExperienceById(experienceId);
    this.getExperiences();
  }
}
