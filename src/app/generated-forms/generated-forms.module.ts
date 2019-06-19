import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgForageConfig, Driver } from 'ngforage';
import { FormComponentsModule } from '../form-components/form-components.module';

  import { FormN1Component } from './form-n1/form-n1.component';


const routes: Routes = [
  {
    path: 'forms',
    component: FormN1Component,
    children: [
      {

        path: 'form-n1',
        component: FormN1Component

      }
    ]
  }
];

@NgModule({
  declarations: [

        FormN1Component

  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    FormComponentsModule,
    RouterModule.forChild(routes)
  ],
  exports: [

      FormN1Component

  ]
})

export class GeneratedFormsModule {
  public constructor(ngfConfig: NgForageConfig) {
    ngfConfig.configure({
      name: 'FormGenerator',
      driver: [Driver.INDEXED_DB]
    });
  }
}
