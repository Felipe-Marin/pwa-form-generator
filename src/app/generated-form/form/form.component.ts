import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {


  generatedForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.generatedForm = new FormGroup ({
      input1: new FormControl()
    });
  }

}
