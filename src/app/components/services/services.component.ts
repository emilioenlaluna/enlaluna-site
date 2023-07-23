import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Service } from 'src/app/shared/services/service'; // Importar la interfaz Service
import { ServiceService } from 'src/app/shared/services/service.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  public serviceForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    imagen: ['', Validators.required],
    price: ['', Validators.required],
    url: [''],
    time: [''],
  });

  constructor(public auth: AuthService, private fb: FormBuilder, private serviceService: ServiceService) {}

  get name() {
    return this.serviceForm.get('name');
  }
  get description() {
    return this.serviceForm.get('description');
  }
  get imagen() {
    return this.serviceForm.get('imagen');
  }
  get price() {
    return this.serviceForm.get('price');
  }
  get url() {
    return this.serviceForm.get('url');
  }
  get time() {
    return this.serviceForm.get('time');
  }

  ResetForm() {
    this.serviceForm.reset();
  }

  submitServiceData() {
    this.serviceService.AddService(this.serviceForm.value);
    this.ResetForm();
    this.getServices();
  }

  services: Service[] = [];

  ngOnInit() {
    this.getServices();
    document.addEventListener('DOMContentLoaded', () => {
      // Get the modal container element
      const modalContainer = document.querySelector('.modal-container');

      if (modalContainer) {
        // Add the 'show' class to the modal container when the modal is opened
        this.openModal = (experience: any): void => {
          this.selectedService = experience;
          this.showModal = true;
          modalContainer.classList.add('show');
        };

        // Remove the 'show' class from the modal container when the modal is closed
        this.closeModal = (): void => {
          this.showModal = false;
          this.selectedService = {};
          modalContainer.classList.remove('show');
        };
      }
    });
  }

  getServices() {
    this.serviceService.GetServicesList().subscribe((services) => {
      this.services = services;
    });
  }

  deleteService(serviceId: string | any) {
    this.serviceService.deleteServiceById(serviceId);
    this.getServices();
  }

  //Modal
  showModal: boolean = false;
  selectedService: any = {}; // Initialize selectedExperience as an empty object

  // Your other existing code...

  openModal(service: any): void {
    this.selectedService = service;
    this.showModal = true;
   // document.querySelector('.modal-container').classList.add('show');
  }

  closeModal(): void {
    this.showModal = false;
    this.selectedService = {}; 
    //document.querySelector('.modal-container').classList.remove('show');// Reset the selectedExperience object when closing the modal
  }
}
