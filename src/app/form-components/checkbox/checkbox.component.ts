import { Component, OnInit, Input } from '@angular/core';
import { AbstractValueAccessor, MakeProvider } from '../abstract-value-accessor';
import { Options } from 'selenium-webdriver/safari';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  providers: [MakeProvider(CheckboxComponent)]
})
export class CheckboxComponent extends AbstractValueAccessor<CheckboxOption[]> implements OnInit {

  @Input() title: string;
  @Input() options: CheckboxOption[];

  constructor() {
    super();
  }

  ngOnInit() {

  }

  /*public getValue(): string {
    let value = '';
    for (let i = 0; i < this.options.length; i++) {
      if (this.options[i].isChecked === true) {
        value += this.options[i].val + ' ,';
      }
    }
    return value;
  }*/

  public getValue(): string {
    const valueArray = new Array<string>();
    for (let i = 0; i < this.options.length; i++) {
      if (this.options[i].isChecked === true) {
        valueArray.push(this.options[i].val);
      }
    }
    return valueArray.toString();
  }

}

export interface CheckboxOption {
  val: string;
  isChecked: boolean;
}
