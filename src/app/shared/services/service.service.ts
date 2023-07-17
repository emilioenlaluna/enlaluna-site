import { Injectable } from '@angular/core';
import { Service } from './service';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  servicesCollection: AngularFirestoreCollection<Service>; // Cambiar el nombre de la colección
  serviceDoc!: AngularFirestoreDocument<Service>; // Cambiar el nombre del documento

  constructor(private firestore: AngularFirestore) {
    this.servicesCollection = this.firestore.collection<Service>('services'); // Cambiar el nombre de la colección
  }

  AddService(service: Service) { // Cambiar el nombre de la función
    this.servicesCollection.add(service); // Cambiar el nombre de la colección
  }

  GetServicesList(): Observable<Service[]> { // Cambiar el nombre de la función
    return this.servicesCollection.snapshotChanges().pipe(
      map((changes) => {
        return changes.map((action) => {
          const data = action.payload.doc.data() as Service;
          const $key = action.payload.doc.id;
          return { $key, ...data };
        });
      })
    );
  }

  deleteServiceById(serviceId: string): Promise<void> { // Cambiar el nombre de la función
    const serviceDoc = this.firestore.doc<Service>(`services/${serviceId}`); // Cambiar el nombre de la colección
    return serviceDoc.delete();
  }
}
