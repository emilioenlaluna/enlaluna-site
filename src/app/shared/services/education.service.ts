import { Injectable } from '@angular/core';
import { Education } from './education';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  educationCollection: AngularFirestoreCollection<Education>; // Cambiar el nombre de la colección
  educationDoc!: AngularFirestoreDocument<Education>; // Cambiar el nombre del documento

  constructor(private firestore: AngularFirestore) {
    this.educationCollection = this.firestore.collection<Education>('education'); // Cambiar el nombre de la colección
  }

  AddEducation(education: Education) { // Cambiar el nombre de la función
    this.educationCollection.add(education); // Cambiar el nombre de la colección
  }

  GetEducationsList(): Observable<Education[]> { // Cambiar el nombre de la función
    return this.educationCollection.snapshotChanges().pipe(
      map((changes) => {
        return changes.map((action) => {
          const data = action.payload.doc.data() as Education;
          const $key = action.payload.doc.id;
          return { $key, ...data };
        });
      })
    );
  }

  deleteEducationById(educationId: string): Promise<void> { // Cambiar el nombre de la función
    const educationDoc = this.firestore.doc<Education>(`education/${educationId}`); // Cambiar el nombre de la colección
    return educationDoc.delete();
  }
}
