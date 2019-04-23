import { Injectable } from '@angular/core';
import { FormRequest, FormRequestStatus } from './form-request';
import { FormLocalStorageService } from './form-local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private localStorageService: FormLocalStorageService) { }

  public sendForm(form: Object) {
    const date = Date.now();
    const formRequest: FormRequest = {
      id: String(date),
      date: date,
      form: form,
      status: FormRequestStatus.pending
    };
    this.localStorageService.setForm(formRequest);
    if (navigator.onLine) {
      formRequest.status = FormRequestStatus.sended;
      this.localStorageService.setForm(formRequest);
    } else {
      if ('serviceWorker' in navigator && 'SyncManager' in Window) {
        navigator.serviceWorker.ready.then(sw => {
          sw.sync.register('syncForm')
            .catch(err => {
              console.log(err);
            });
        });
      } else {
        // Tentar enviar para o servidor, lidar com novas tentativas de envio ao abrir o aplicativo
      }
    }
  }
}
