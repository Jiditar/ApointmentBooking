import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {LoginPage} from '../pages/login/login.page';
import { LoadingController,NavController,AlertController,ToastController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule,CommonModule,LoginPage],
})



// const jide= new LoginPage(NavController,LoadingController,ToastController)

export class HomePage {
  // user: any={};

  constructor(private login:LoginPage) {}

  triggerEvent(){ 
  }

  
}

