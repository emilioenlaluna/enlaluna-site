import { Injectable } from '@angular/core';
import { Contact } from './contact';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore'; // Import Firestore modules

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contactsCollection: AngularFirestoreCollection<Contact>; // Firestore collection reference

  constructor(private firestore: AngularFirestore) {
    this.contactsCollection = this.firestore.collection<Contact>('contacts'); // Set the Firestore collection to 'contacts'
  }

  AddContact(contact: Contact) {
    if (contact) {
      this.contactsCollection.add({
        nombre: contact.nombre,
        correo: contact.correo,
        asunto: contact.asunto,
        numero: contact.numero,
        descripcion: contact.descripcion,

      }).then(() => {
        alert('I will answer as soon as I can');
      }).catch((error) => {
        console.error('Error adding contact:', error);
      });
    }
  }
}
