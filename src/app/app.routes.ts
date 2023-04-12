import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'appointment',
    pathMatch: 'full',
  },
  {
    path: 'booking',
    loadComponent: () => import('./pages/booking/booking.page').then( m => m.BookingPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'menu',
    loadComponent: () => import('./pages/menu/menu.page').then( m => m.MenuPage)
  },
  {
    path: 'appointment',
    loadComponent: () => import('./pages/appointment/appointment.page').then( m => m.AppointmentPage)
  },
  {
    path: 'c-appointment',
    loadComponent: () => import('./pages/c-appointment/c-appointment.page').then( m => m.CAppointmentPage)
  },
];
