import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { GeneratedFormsModule } from '../generated-forms/generated-forms.module';
import { FormListComponent } from './form-list/form-list.component';

@NgModule({
  declarations: [FormListComponent],
  imports: [
    CommonModule,
    IonicModule,
    GeneratedFormsModule
  ],
  exports: [
    FormListComponent
  ]
})
export class FormManagerModule { }
