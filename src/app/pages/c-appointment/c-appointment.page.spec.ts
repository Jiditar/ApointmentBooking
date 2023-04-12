import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CAppointmentPage } from './c-appointment.page';

describe('CAppointmentPage', () => {
  let component: CAppointmentPage;
  let fixture: ComponentFixture<CAppointmentPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CAppointmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
