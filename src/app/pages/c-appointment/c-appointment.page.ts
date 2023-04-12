import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-c-appointment',
  templateUrl: './c-appointment.page.html',
  styleUrls: ['./c-appointment.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CAppointmentPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  
  cancelAppointment(){

  }
  backAppointment(){
    
  }
  
 
}
