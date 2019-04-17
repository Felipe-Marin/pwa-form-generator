import { Component, OnInit, Input } from '@angular/core';
import { AbstractValueAccessor, MakeProvider } from '../abstract-value-accessor';

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

  ngOnInit() {}

}

export class CheckboxOption {
  val: string;
  isChecked: boolean;
}
