import { Component, OnInit } from '@angular/core';
import { FormLocalStorageService } from 'src/app/generated-forms/services/form-local-storage.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-response-view',
  templateUrl: './response-view.component.html',
  styleUrls: ['./response-view.component.scss'],
})
export class ResponseViewComponent implements OnInit {

  responseList = [];
  forms = {
    form1: {
        q1: 'Texto Curto',
        q2: 'Texto Longo',
        q3: 'Escolha Múltipla',
        q4: 'Checkbox',
        q5: 'Select',
        q6: 'Slider',
        q7: 'Data',
    },
  };

  constructor(private localService: FormLocalStorageService, private router: ActivatedRoute) { }

  ngOnInit() {
    const id = this.router.snapshot.params.id;
    console.log(id);
    const formPromise = this.localService.getForm(id);
    formPromise.then(form => {
      console.log('form' +  form);
      const questions = form.form;
      for (const key of Object.keys(questions)) {
        this.responseList.push({
          questionTitle:  this.forms[form.formId][key],
          response: questions[key]
        });
      }
    });

  }

}
