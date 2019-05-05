import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { ServerService } from '../services/server.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {


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

  constructor(private serverService: ServerService) { }

  ngOnInit() { }

  printForm() {
    console.log(this.generatedForm.value);
  }

  submitForm() {
    console.log(this.generatedForm.value);
    this.serverService.sendForm(this.generatedForm.value);
  }

}
