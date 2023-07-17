import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Project } from 'src/app/shared/services/project';
import { ProjectService } from 'src/app/shared/services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
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

  constructor(private fb: FormBuilder, private projectservice: ProjectService) {
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

}
