import { Injectable } from '@angular/core';
import { Other } from './other';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OtherService {
  othersCollection: AngularFirestoreCollection<Other>; // Cambiar el nombre de la colección
  otherDoc!: AngularFirestoreDocument<Other>; // Cambiar el nombre del documento

  constructor(private firestore: AngularFirestore) {
    this.othersCollection = this.firestore.collection<Other>('others'); // Cambiar el nombre de la colección
  }

  AddOther(other: Other) { // Cambiar el nombre de la función
    this.othersCollection.add(other); // Cambiar el nombre de la colección
  }

  GetOthersList(): Observable<Other[]> { // Cambiar el nombre de la función
    return this.othersCollection.snapshotChanges().pipe(
      map((changes) => {
        return changes.map((action) => {
          const data = action.payload.doc.data() as Other;
          const $key = action.payload.doc.id;
          return { $key, ...data };
        });
      })
    );
  }

  deleteOtherById(otherId: string): Promise<void> { // Cambiar el nombre de la función
    const otherDoc = this.firestore.doc<Other>(`others/${otherId}`); // Cambiar el nombre de la colección
    return otherDoc.delete();
  }
}
