import { Component, OnInit, Input } from '@angular/core';
import { AbstractValueAccessor, MakeProvider } from '../abstract-value-accessor';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],
  providers: [MakeProvider(DateComponent)]
})
export class DateComponent extends AbstractValueAccessor<string> implements OnInit {

  @Input() title: string;
  @Input() label: string;
  @Input() display: string;
  @Input() picker: string;
  displayFormat: string;

  constructor() {
    super();
   }

  ngOnInit() {
    this.displayFormat = 'DD MM YYYY';
    console.log(this.display);
    console.log(this.picker);
  }

}
