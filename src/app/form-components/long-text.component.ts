import { Component, OnInit, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const customValueProvider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => LongTextComponent),
  multi: true
};

@Component({
  selector: 'app-long-text',
  templateUrl: './long-text.component.html',
  styleUrls: ['./long-text.component.scss'],
  providers: [customValueProvider]
})
export class LongTextComponent implements OnInit, ControlValueAccessor {

  @Input() title: string;
  @Input() label: string;

  _value = '';
  propagateChange: any = () => {};

  constructor() { }

  ngOnInit() {}

  writeValue(value: any) {
    if (value) {
      this._value = value;
    }
  }

  registerOnChange(fn: any) {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: () => void): void {  }

  onChange(event) {
    this.propagateChange(event.target.value);
  }

}
