import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { ShortTextComponent } from './short-text/short-text.component';
import { LongTextComponent } from './long-text/long-text.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MultipleChoiceComponent } from './multiple-choice/multiple-choice.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { SelectComponent } from './select/select.component';
import { DateComponent } from './date/date.component';
import { SliderComponent } from './slider/slider.component';
import { GeolocationComponent } from './geolocation/geolocation.component';
import { NgForageConfig, Driver } from 'ngforage';

@NgModule({
  declarations: [
    FormComponent,
    ShortTextComponent,
    LongTextComponent,
    MultipleChoiceComponent,
    CheckboxComponent,
    SelectComponent,
    DateComponent,
    SliderComponent,
    GeolocationComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FormComponent,
    ShortTextComponent,
    LongTextComponent
  ]
})
export class GeneratedFormModule {
  public constructor(ngfConfig: NgForageConfig) {
    ngfConfig.configure({
      name: 'FormGenerator',
      driver: [Driver.INDEXED_DB]
    });
  }
}
