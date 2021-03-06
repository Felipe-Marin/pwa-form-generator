import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { ServerService } from '../services/server.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-n1',
  templateUrl: './form-n1.component.html',
  styleUrls: ['./form-n1.component.scss'],
})
export class FormN1Component implements OnInit {

  formId = 'form1';

  notification = true;

  location = true;

  generatedForm = new FormGroup ({
    q1: new FormControl(),
    q2: new FormControl(),
    q3: new FormControl(),
    q4: new FormControl(),
    q5: new FormControl(),
    q6: new FormControl(),
    q7: new FormControl(),
  });

  q3_options = [
    'Resposta 1',
    'Resposta 2',
    'Resposta 3',
    'Resposta 4',
  ];
  q4_options = [
    {val: 'Opção 1', isChecked: false},
    {val: 'Opção 2', isChecked: false},
    {val: 'Opção 3', isChecked: false},
    {val: 'Opção 4', isChecked: false},
    {val: 'Opção 5', isChecked: false},
  ];
  q5_options = [
    'Resposta select 1',
    'Resposta select 2',
    'Resposta select 3',
    'Resposta select 4',
  ];

  constructor(private serverService: ServerService, public toastController: ToastController, public router: Router) { }

  ngOnInit() { }

  printForm() {
    console.log(this.generatedForm.value);
  }

  submitForm() {
    console.log(this.generatedForm.value);
    if (this.location) {
      navigator.geolocation.getCurrentPosition(geolocation => {
        this.generatedForm.value.locationLon = geolocation.coords.longitude;
        this.generatedForm.value.locationLat = geolocation.coords.latitude;
        this.serverService.sendForm(this.formId, this.generatedForm.value);
      }, err => {
        this.serverService.sendForm(this.formId, this.generatedForm.value);
      });
    } else {
      this.serverService.sendForm(this.formId, this.generatedForm.value);
    }
    this.presentToast();
    this.router.navigateByUrl('#/tabs/tab1');
    if (this.notification) {
      Notification.requestPermission();
    }
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Resposta salva.',
      duration: 2000
    });
    toast.present();
  }
}
