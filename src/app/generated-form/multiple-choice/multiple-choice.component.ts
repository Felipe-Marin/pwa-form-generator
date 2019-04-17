import { Component, OnInit, Input } from '@angular/core';
import { AbstractValueAccessor, MakeProvider } from '../abstract-value-accessor';

@Component({
  selector: 'app-multiple-choice',
  templateUrl: './multiple-choice.component.html',
  styleUrls: ['./multiple-choice.component.scss'],
  providers: [MakeProvider(MultipleChoiceComponent)]
})
export class MultipleChoiceComponent extends AbstractValueAccessor<string> implements OnInit {

  @Input() title: string;
  @Input() label: string;
  @Input() options: string[];

  constructor() {
    super();
  }

  ngOnInit() {}

}
