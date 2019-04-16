import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { ShortTextComponent } from './short-text/short-text.component';
import { LongTextComponent } from './long-text/long-text.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FormComponent,
    ShortTextComponent,
    LongTextComponent
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
export class GeneratedFormModule { }
