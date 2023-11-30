import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  name: string = 'Sender';
  message: string;
  isLoading = false;
  currentUserId = 1;
  chats = [
    {id: 1, sender: 1, message: 'hi'},
    {id: 2, sender: 2, message: 'hi there!'},
  ];

  constructor() { }

  ngOnInit() {
  }

  sendMessage() {}

}
