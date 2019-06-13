import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortTextComponent } from './short-text/short-text.component';
import { LongTextComponent } from './long-text/long-text.component';
import { MultipleChoiceComponent } from './multiple-choice/multiple-choice.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { SelectComponent } from './select/select.component';
import { DateComponent } from './date/date.component';
import { SliderComponent } from './slider/slider.component';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ShortTextComponent,
    LongTextComponent,
    MultipleChoiceComponent,
    CheckboxComponent,
    SelectComponent,
    DateComponent,
    SliderComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ShortTextComponent,
    LongTextComponent,
    MultipleChoiceComponent,
    CheckboxComponent,
    SelectComponent,
    DateComponent,
    SliderComponent
  ]
})
export class FormComponentsModule { }
