import { Component } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 constructor(public auth:AuthService,private translocoService: TranslocoService){

 }

 public languagesList: 
 Array<Record<'imgUrl' | 'code' | 'name' | 'shorthand', string>> = [
 {
   imgUrl: '/assets/images/English.png',
   code: 'en',
   name: 'English',
   shorthand: 'ENG',
 },

 {
   imgUrl: '/assets/images/Persian.png',
   code: 'es',
   name: 'Español',
   shorthand: 'ES',
 },
];
public changeLanguage(languageCode: string): void {
 this.translocoService.setActiveLang(languageCode);
 languageCode === 'fa'
   ? (document.body.style.direction = 'rtl')
   : (document.body.style.direction = 'ltr');
}
}