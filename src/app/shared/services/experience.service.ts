import { Injectable } from '@angular/core';
import { Experience } from './experience'; // Importar la interfaz Experience
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  experiencesCollection: AngularFirestoreCollection<Experience>; // Cambiar el nombre de la colección
  experienceDoc!: AngularFirestoreDocument<Experience>; // Cambiar el nombre del documento

  constructor(private firestore: AngularFirestore) {
    this.experiencesCollection = this.firestore.collection<Experience>('experiences'); // Cambiar el nombre de la colección
  }

  AddExperience(experience: Experience) { // Cambiar el nombre de la función
    this.experiencesCollection.add(experience); // Cambiar el nombre de la colección
  }

  GetExperiencesList(): Observable<Experience[]> { // Cambiar el nombre de la función
    return this.experiencesCollection.snapshotChanges().pipe(
      map((changes) => {
        return changes.map((action) => {
          const data = action.payload.doc.data() as Experience;
          const $key = action.payload.doc.id;
          return { $key, ...data };
        });
      })
    );
  }

  deleteExperienceById(experienceId: string): Promise<void> { // Cambiar el nombre de la función
    const experienceDoc = this.firestore.doc<Experience>(`experiences/${experienceId}`); // Cambiar el nombre de la colección
    return experienceDoc.delete();
  }
}
