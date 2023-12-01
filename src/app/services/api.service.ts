import { Injectable } from '@angular/core';
import { setDoc, doc, Firestore, collectionData } from '@angular/fire/firestore'
import { FieldPath, collection, getDoc, query, where } from 'firebase/firestore';

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

  collectionRef(path: any) {
    return collection(this.firestore, path);
  }

  setDocument(path: any, data: any) {
    const dataRef = this.docRef(path);
    return setDoc(dataRef, data)
  }

  getDocById(path: any) {
    const dataRef = this.docRef(path);
    return getDoc(dataRef)
  }

  collectionDataQuery(path: any, queryFn: any) {
    let dataRef: any = this.collectionRef(path)
    if (queryFn) {
      const q = query(dataRef, queryFn)
      dataRef = q
    }

    const collection_data = collectionData<any>(dataRef);
    return collection_data;
  }

  whereQuery(fieldPath: any, condition: any, value: any) {
    return where(fieldPath, condition, value);
  }


}
