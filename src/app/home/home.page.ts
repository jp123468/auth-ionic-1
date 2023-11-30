import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  email: any
  segment = 'chats';
  users = [
    {id: 1, name: 'NIkhil', photo: 'https://i.pravatar.cc/315'},
    {id: 2, name: 'XYZ', photo: 'https://i.pravatar.cc/325'},
  ];
  chatRooms = [
    {id: 1, name: 'NIkhil', photo: 'https://i.pravatar.cc/315'},
    {id: 2, name: 'XYZ', photo: 'https://i.pravatar.cc/325'},
  ];

  constructor(
    private router: Router,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private authService: AuthenticationService,
  ) {}

  async toastPresent( message: string ) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 2500,
      position: 'middle',
    });

    await toast.present();
  }

  ngOnInit(): void {
      
  };

  async singOut () {
      const loading = await this.loadingCtrl.create()
      await loading.present();
      this.authService.singOut().then( () => {
        loading.dismiss();
        this.router.navigate(['/landing']);
      })
      .catch(err => {
        this.toastPresent("Error sing out, wait a moment...");
      })
  };

  getChat(item: any) {
    this.router.navigate(['/chats', item?.id]);
  }

}
