import { Component, OnInit, Input } from '@angular/core';
import { AbstractValueAccessor, MakeProvider } from '../abstract-value-accessor';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [MakeProvider(SelectComponent)]
})
export class SelectComponent extends AbstractValueAccessor<string> implements OnInit {

  @Input() title: string;
  @Input() label: string;
  @Input() placeholder: string;
  @Input() okText: string;
  @Input() cancelText: string;
  @Input() options: string[];

  constructor() {
    super();
  }

  ngOnInit() {}

}
