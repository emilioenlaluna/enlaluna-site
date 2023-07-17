import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Me } from 'src/app/shared/services/me'; // Importar la interfaz Me
import { MeService } from 'src/app/shared/services/me.service';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css']
})
export class MeComponent implements OnInit {
  public meForm: FormGroup = this.fb.group({
    title: ['', Validators.required],
    content: ['', Validators.required],
    imagen: ['', Validators.required],
    url: [''],
  });

  constructor(public auth: AuthService, private fb: FormBuilder, private meService: MeService) {}

  get title() {
    return this.meForm.get('title');
  }
  get content() {
    return this.meForm.get('content');
  }
  get imagen() {
    return this.meForm.get('imagen');
  }
  get url() {
    return this.meForm.get('url');
  }

  ResetForm() {
    this.meForm.reset();
  }

  submitMeData() {
    this.meService.AddMe(this.meForm.value);
    this.ResetForm();
    this.getMeList();
  }

  meList: Me[] = [];

  ngOnInit() {
    this.getMeList();
  }

  getMeList() {
    this.meService.GetMeList().subscribe((meList) => {
      this.meList = meList;
    });
  }

  deleteMe(meId: string | any) {
    this.meService.deleteMeById(meId);
    this.getMeList();
  }
}
