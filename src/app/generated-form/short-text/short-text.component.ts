import { Component, OnInit, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const customValueProvider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ShortTextComponent),
  multi: true
};

@Component({
  selector: 'app-short-text',
  templateUrl: './short-text.component.html',
  styleUrls: ['./short-text.component.scss'],
  providers: [customValueProvider]
})
export class ShortTextComponent implements OnInit, ControlValueAccessor {

  @Input() title: string;
  @Input() label: string;

  // @Output() value = new EventEmitter<string>();
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
