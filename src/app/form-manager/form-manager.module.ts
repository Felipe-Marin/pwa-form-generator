import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { GeneratedFormsModule } from '../generated-forms/generated-forms.module';
import { FormListComponent } from './form-list/form-list.component';
import { ResponseListComponent } from './response-list/response-list.component';
import { ResponseViewComponent } from './response-view/response-view.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'response/:id',
    component: ResponseViewComponent,
  }
];

@NgModule({
  declarations: [FormListComponent, ResponseListComponent, ResponseViewComponent],
  imports: [
    CommonModule,
    IonicModule,
    GeneratedFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    FormListComponent,
    ResponseListComponent,
    ResponseViewComponent
  ]
})
export class FormManagerModule { }
