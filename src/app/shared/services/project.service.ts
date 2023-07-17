import { Injectable } from '@angular/core';
import { Project } from './project';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
    return this.projectsCollection.snapshotChanges().pipe(
      map((changes) => {
        return changes.map((action) => {
          const data = action.payload.doc.data() as Project;
          const $key = action.payload.doc.id;
          return { $key, ...data };
        });
      })
    );
  }


  deleteProjectById(projectId: string): Promise<void> {
    const projectDoc = this.firestore.doc<Project>(`project/${projectId}`);
    return projectDoc.delete();
  }
  
}
