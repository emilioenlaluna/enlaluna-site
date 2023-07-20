import { Component } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent {
  src = 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf';
  // pdfSrc: string | PDFSource | ArrayBuffer = './assets/pdf-test.pdf';
  downloadPdf() {
    const pdfUrl = 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf'; // Reemplaza con la URL del archivo PDF en GitHub o en otro servidor accesible
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'nombre_del_archivo.pdf'; // Cambia el nombre del archivo descargado si lo deseas
    link.target = '_blank'; // Abre en una nueva pestaña, opcional
    link.click();
  }
  downloadPdfSpanish() {
    const pdfUrl = 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf'; // Reemplaza con la URL del archivo PDF en GitHub o en otro servidor accesible
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'nombre_del_archivo.pdf'; // Cambia el nombre del archivo descargado si lo deseas
    link.target = '_blank'; // Abre en una nueva pestaña, opcional
    link.click();
  }
}
