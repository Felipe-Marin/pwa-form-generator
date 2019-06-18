import { Injectable, OnInit } from '@angular/core';
import {NgForage, Driver, NgForageCache, NgForageConfig, CachedItem} from 'ngforage';
import { FormRequest } from './form-request';

@Injectable({
  providedIn: 'root'
})
export class FormLocalStorageService implements OnInit {

  constructor(private readonly ngf: NgForage) { }

  ngOnInit() {
    this.ngf.name = 'Forms';
  }

  public setForm(formRequest: FormRequest) {
    return this.ngf.setItem<FormRequest>(String(formRequest.date), formRequest);
  }

  public getForm(id: string) {
    return this.ngf.getItem<FormRequest>(id);
  }

  public getFormsKeys() {
    return this.ngf.keys();
  }
}
