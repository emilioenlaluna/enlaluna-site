import { Injectable } from '@angular/core';
import { Me } from './me'; // Importar la interfaz Me
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class MeService {
  meCollection: AngularFirestoreCollection<Me>; // Cambiar el nombre de la colección
  meDoc!: AngularFirestoreDocument<Me>; // Cambiar el nombre del documento

  constructor(private firestore: AngularFirestore) {
    this.meCollection = this.firestore.collection<Me>('me'); // Cambiar el nombre de la colección
  }

  AddMe(me: Me) { // Cambiar el nombre de la función
    this.meCollection.add(me); // Cambiar el nombre de la colección
  }

  GetMeList(): Observable<Me[]> { // Cambiar el nombre de la función
    return this.meCollection.snapshotChanges().pipe(
      map((changes) => {
        return changes.map((action) => {
          const data = action.payload.doc.data() as Me;
          const $key = action.payload.doc.id;
          return { $key, ...data };
        });
      })
    );
  }

  deleteMeById(meId: string): Promise<void> { // Cambiar el nombre de la función
    const meDoc = this.firestore.doc<Me>(`me/${meId}`); // Cambiar el nombre de la colección
    return meDoc.delete();
  }
}
