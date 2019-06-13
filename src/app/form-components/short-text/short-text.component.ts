import { Component, OnInit, Input } from '@angular/core';
import { MakeProvider, AbstractValueAccessor } from '../abstract-value-accessor';

@Component({
  selector: 'app-short-text',
  templateUrl: './short-text.component.html',
  styleUrls: ['./short-text.component.scss'],
  providers: [MakeProvider(ShortTextComponent)]
})
export class ShortTextComponent extends AbstractValueAccessor<string> implements OnInit {

  @Input() title: string;
  @Input() label: string;

  constructor() {
    super();
   }

  ngOnInit() {}

}
