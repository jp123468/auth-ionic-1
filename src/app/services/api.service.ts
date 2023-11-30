import { Injectable } from '@angular/core';
import { setDoc,doc,Firestore } from '@angular/fire/firestore'
import { getDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private firestore: Firestore,
  ) { }

  docRef(path: any) {
    return doc(this.firestore, path)
  }

  setDocument(path: any, data: any) {
    const dataRef = this.docRef(path);
    return setDoc(dataRef, data)
  }

  getDocById(path: any) {
    const dataRef = this.docRef(path);
    return getDoc(dataRef)
  }
}
