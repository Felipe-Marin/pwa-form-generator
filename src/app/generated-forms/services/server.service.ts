import { Injectable } from '@angular/core';
import { FormRequest, FormRequestStatus } from './form-request';
import { FormLocalStorageService } from './form-local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private localStorageService: FormLocalStorageService) { }

  public sendForm(formId: string, form: Object) {
    const date = Date.now();
    const formRequest: FormRequest = {
      formId: formId,
      date: date,
      form: form,
      status: FormRequestStatus.pending
    };
    this.localStorageService.setForm(formRequest).then(value => {
      if ('serviceWorker' in navigator && 'SyncManager' in window) {
        navigator.serviceWorker.ready.then(sw => {
          console.log('sync registrado');
          sw.sync.register('syncForm')
            .catch(err => {
              console.log(err);
            });
        });
      } else {
        /*
        Service worker ou SyncManager indisponiveis
        Tentar enviar para o servidor sem o service worker
        Possível solução: Criar um listener para o evento online toda vez que o aplicativo for iniciado,
        e verificar se tem forms com envio pendente
        */
      }
    });
  }
}
