import { Component, OnInit } from '@angular/core';
import { FormLocalStorageService } from 'src/app/generated-forms/services/form-local-storage.service';

@Component({
  selector: 'app-response-list',
  templateUrl: './response-list.component.html',
  styleUrls: ['./response-list.component.scss'],
})
export class ResponseListComponent implements OnInit {

  forms = {
    form1: {title: 'Formulário'},
  };

  responseList: Object[];

  constructor(private localService: FormLocalStorageService) { }

  ngOnInit() {
    this.responseList = this.localService.getForms();
    console.log(this.responseList);
  }

  dateToString(date: Date) {
    const localStr = new Date(date).toLocaleString();
    return localStr;
  }

}
