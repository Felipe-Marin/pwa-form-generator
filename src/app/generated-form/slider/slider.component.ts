import { Component, OnInit, Input } from '@angular/core';
import { AbstractValueAccessor, MakeProvider } from '../abstract-value-accessor';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  providers: [MakeProvider(SliderComponent)]
})
export class SliderComponent extends AbstractValueAccessor<number> implements OnInit {

  @Input() title: string;
  @Input() min: number;
  @Input() max: number;
  @Input() step: number;

  constructor() {
    super();
   }

  ngOnInit() {}

}
