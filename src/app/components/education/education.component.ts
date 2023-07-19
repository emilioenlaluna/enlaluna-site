import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Education } from 'src/app/shared/services/education';
import { EducationService } from 'src/app/shared/services/education.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  public educationForm: FormGroup = this.fb.group({
    institution: ['', Validators.required],
    degree: ['', Validators.required],
    startDate: ['', Validators.required],
    endDate: ['', Validators.required],
    descripcion: ['', Validators.required],
    imagen: ['', Validators.required],
  });

  constructor(public auth: AuthService, private fb: FormBuilder, private educationService: EducationService) {}

  get institution() {
    return this.educationForm.get('institution');
  }
  get degree() {
    return this.educationForm.get('degree');
  }
  get startDate() {
    return this.educationForm.get('startDate');
  }
  get endDate() {
    return this.educationForm.get('endDate');
  }
  get descripcion() {
    return this.educationForm.get('descripcion');
  }
  get imagen() {
    return this.educationForm.get('imagen');
  }

  ResetForm() {
    this.educationForm.reset();
  }

  submitEducationData() {
    this.educationService.AddEducation(this.educationForm.value);
    this.ResetForm();
    this.getEducations();
  }

  educations: Education[] = [];

  ngOnInit() {
    this.getEducations();
  }

  getEducations() {
    this.educationService.GetEducationsList().subscribe((educations) => {
      this.educations = educations;
    });
  }

  deleteEducation(educationId: string | any) {
    this.educationService.deleteEducationById(educationId);
    this.getEducations();
  }
}
