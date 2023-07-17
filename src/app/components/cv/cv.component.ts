import { Component } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent {
  src = 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf';
  // pdfSrc: string | PDFSource | ArrayBuffer = './assets/pdf-test.pdf';
}
