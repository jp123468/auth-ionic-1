
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

export interface User {
  uid: string;
  email: string;
}

export interface Message {
  //  createdAt: firebase.firestore.FieldValue;
  id: string;
  from: string;
  msg: string;
  fromName: string;
  myMsg: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  currentUserId: string;
  public users: Observable<any>;

  constructor(
    private api: ApiService,
    public auth: AuthenticationService
  ) {
    this.getId()
  }

  getId() {
    this.currentUserId = this.auth.getId()
    console.log(this.currentUserId)
  }

  getUsers() {
    this.users = this.api.collectionDataQuery(
      'users',
      this.api.whereQuery('uid', '!=', this.currentUserId)
    )
  }



}

