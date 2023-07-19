import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/shared/services/contact.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  public contactForm: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    asunto: ['',[Validators.required, Validators.minLength(3)]],
    correo: [
      '',
      [
        Validators.required,
    
      ],
    ],
    numero: ['', [Validators.required, ]],
    descripcion: ['',[Validators.required, ]],
  });
  constructor(
    public crudApi: ContactService,
    public fb: FormBuilder
  ) {

  }
  ngOnInit() {
   
  }
 



  get nombre() {
    return this.contactForm.get('nombre');
  }
  get correo() {
    return this.contactForm.get('correo');
  }
  get asunto() {
    return this.contactForm.get('asunto');
  }
  get numero() {
    return this.contactForm.get('numero');
  }
  get descripcion() {
    return this.contactForm.get('descripcion');
  }
  ResetForm() {
    this.contactForm.reset();
  }
  submitContactData() {
    this.crudApi.AddContact(this.contactForm.value);
    this.ResetForm();
  }
}


