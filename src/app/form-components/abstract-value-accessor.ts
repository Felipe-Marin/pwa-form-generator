import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { forwardRef } from '@angular/core';

export abstract class AbstractValueAccessor<T> implements ControlValueAccessor {

    value: T;

    get_value(): T {
        return this.value;
    }

    set_value(value: T) {
        if (value !== this.value) {
            this.value = value;
            this.onChange(value);
        }
    }

    onChange = (_) => {};

    onTouched = () => {};

    writeValue(value: T) {
        this.value = value;
        this.onChange(value);
    }

    registerOnChange(fn: (_: any) => void): void {
        this.onChange = fn;
    }
    registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }

}

export function MakeProvider(type: any) {
    return {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => type),
      multi: true
    };
}
