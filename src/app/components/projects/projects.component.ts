import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Project } from 'src/app/shared/services/project';
import { ProjectService } from 'src/app/shared/services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  public projectForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    technologies: ['', Validators.required],
    startDate: ['', Validators.required],
    endDate: ['', Validators.required],
    imagen: ['', Validators.required],
    githubLink: ['', Validators.required],
  });

  constructor(public auth:AuthService,private fb: FormBuilder, private projectservice: ProjectService) {
  }


  get name() {
    return this.projectForm.get('name');
  }
  get description() {
    return this.projectForm.get('description');
  }
  get technologies() {
    return this.projectForm.get('technologies');
  }
  get startDate() {
    return this.projectForm.get('startDate');
  }
  get endDate() {
    return this.projectForm.get('endDate');
  }
  get imagen() {
    return this.projectForm.get('imagen');
  }
  get githubLink() {
    return this.projectForm.get('githubLink');
  }
  ResetForm() {
    this.projectForm.reset();
  }
  submitProjectData() {
    this.projectservice.AddProject(this.projectForm.value);
    this.ResetForm();
    this.getProjects();
  }

  /*
  Listing
  */

  projects: Project[] = [];

  ngOnInit() {
    this.getProjects();
    document.addEventListener('DOMContentLoaded', () => {
      // Get the modal container element
      const modalContainer = document.querySelector('.modal-container');

      if (modalContainer) {
        // Add the 'show' class to the modal container when the modal is opened
        this.openModal = (experience: any): void => {
          this.selectedProject = experience;
          this.showModal = true;
          modalContainer.classList.add('show');
        };

        // Remove the 'show' class from the modal container when the modal is closed
        this.closeModal = (): void => {
          this.showModal = false;
          this.selectedProject = {};
          modalContainer.classList.remove('show');
        };
      }
    });
  }

  getProjects() {
    this.projectservice.GetProjectsList().subscribe((projects) => {
      this.projects = projects;
    });
  }

  deleteProject(projectId: string|any) {
    this.projectservice.deleteProjectById(projectId);
    this.getProjects();
  }


  //Modal
  showModal: boolean = false;
  selectedProject: any = {}; // Initialize selectedExperience as an empty object

  // Your other existing code...

  openModal(project: any): void {
    this.selectedProject = project;
    this.showModal = true;
   // document.querySelector('.modal-container').classList.add('show');
  }

  closeModal(): void {
    this.showModal = false;
    this.selectedProject = {}; 
    //document.querySelector('.modal-container').classList.remove('show');// Reset the selectedExperience object when closing the modal
  }
}
