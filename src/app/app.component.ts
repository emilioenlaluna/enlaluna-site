import { Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { DarkModeService } from 'angular-dark-mode';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  darkMode$ = this.darkModeService.darkMode$;
 constructor(private translocoService: TranslocoService,private darkModeService: DarkModeService){

 }

 public languagesList: 
 Array<Record<'imgUrl' | 'code' | 'name' | 'shorthand', string>> = [
 {
   imgUrl: '/assets/uk.png',
   code: 'en',
   name: 'English',
   shorthand: 'EN',
 },

 {
   imgUrl: '/assets/spain.png',
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
onToggle(): void {
  this.darkModeService.toggle();
}
}