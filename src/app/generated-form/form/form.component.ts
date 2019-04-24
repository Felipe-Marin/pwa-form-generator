import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { ServerService } from '../services/server.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {


  generatedForm: FormGroup;

  checkbox_options = [
    {val: 'Opção 1', isChecked: false},
    {val: 'Opção 2', isChecked: false},
    {val: 'Opção 3', isChecked: false},
    {val: 'Opção 4', isChecked: false}
  ];

  constructor(private serverService: ServerService) { }

  ngOnInit() {
    this.generatedForm = new FormGroup ({
      input1: new FormControl(),
      input2: new FormControl(),
      input3: new FormControl(),
      input4: new FormControl(),
      input5: new FormControl(),
      input6: new FormControl(),
      input7: new FormControl()
    });
  }

  printForm() {
    console.log(this.generatedForm.value);
  }

  submitForm() {
    console.log(this.generatedForm.value);
    this.serverService.sendForm(this.generatedForm.value);
  }

}
