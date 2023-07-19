import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Other } from 'src/app/shared/services/other';
import {OtherService } from 'src/app/shared/services/other.service';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.scss']
})
export class OtherComponent {
  public otherForm: FormGroup = this.fb.group({
    title: ['', Validators.required],
    content: ['', Validators.required],
    imagen: ['', Validators.required],
    githubLink: [''],
    url: [''],
  });

  constructor(public auth: AuthService, private fb: FormBuilder, private otherService: OtherService) {}

  get title() {
    return this.otherForm.get('title');
  }
  get content() {
    return this.otherForm.get('content');
  }
  get imagen() {
    return this.otherForm.get('imagen');
  }
  get githubLink() {
    return this.otherForm.get('githubLink');
  }
  get url() {
    return this.otherForm.get('url');
  }

  ResetForm() {
    this.otherForm.reset();
  }

  submitOtherData() {
    this.otherService.AddOther(this.otherForm.value);
    this.ResetForm();
    this.getOthers();
  }

  others: Other[] = [];

  ngOnInit() {
    this.getOthers();
  }

  getOthers() {
    this.otherService.GetOthersList().subscribe((others) => {
      this.others = others;
    });
  }

  deleteOther(otherId: string | any) {
    this.otherService.deleteOtherById(otherId);
    this.getOthers();
  }
}
