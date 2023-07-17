import { Injectable } from '@angular/core';
import { Project } from './project';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projectsCollection: AngularFirestoreCollection<Project>;
  projectDoc!: AngularFirestoreDocument<Project>;

  constructor(
    private firestore: AngularFirestore
  ) {
    this.projectsCollection = this.firestore.collection<Project>('project');
  }


  AddProject(project: Project) {
    this.projectsCollection.add(project);
  }
  GetProjectsList(): Observable<Project[]> {
    return this.projectsCollection.valueChanges();
  }

  DeleteProject(id: string) {
    this.projectDoc = this.firestore.doc<Project>('project' + id)
    this.projectDoc.delete();
  }
}
