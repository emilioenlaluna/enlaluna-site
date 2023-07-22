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
    document.addEventListener('DOMContentLoaded', () => {
      // Get the modal container element
      const modalContainer = document.querySelector('.modal-container');

      if (modalContainer) {
        // Add the 'show' class to the modal container when the modal is opened
        this.openModal = (experience: any): void => {
          this.selectedExperience = experience;
          this.showModal = true;
          modalContainer.classList.add('show');
        };

        // Remove the 'show' class from the modal container when the modal is closed
        this.closeModal = (): void => {
          this.showModal = false;
          this.selectedExperience = {};
          modalContainer.classList.remove('show');
        };
      }
    });
  
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

  //Modal
  showModal: boolean = false;
  selectedExperience: any = {}; // Initialize selectedExperience as an empty object

  // Your other existing code...

  openModal(experience: any): void {
    this.selectedExperience = experience;
    this.showModal = true;
   // document.querySelector('.modal-container').classList.add('show');
  }

  closeModal(): void {
    this.showModal = false;
    this.selectedExperience = {}; 
    //document.querySelector('.modal-container').classList.remove('show');// Reset the selectedExperience object when closing the modal
  }
}
