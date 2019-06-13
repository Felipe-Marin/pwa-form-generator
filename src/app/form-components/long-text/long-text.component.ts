import { Component, OnInit, Input } from '@angular/core';
import { AbstractValueAccessor, MakeProvider } from '../abstract-value-accessor';

@Component({
  selector: 'app-long-text',
  templateUrl: './long-text.component.html',
  styleUrls: ['./long-text.component.scss'],
  providers: [MakeProvider(LongTextComponent)]
})
export class LongTextComponent extends AbstractValueAccessor<string> implements OnInit {

  @Input() title: string;
  @Input() label: string;

  constructor() {
    super();
  }

  ngOnInit() {}

}
