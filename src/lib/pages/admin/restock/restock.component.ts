import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addStock } from '../../../core/funds/store/funds.actions';
import { positiveIntegerValidator } from '../../../shared/validators/positive-integer.validator';
import { Funds } from '../../../core/funds/models/funds.model';

@Component({
  selector: 'app-restock',
  templateUrl: './restock.component.html',
  styleUrls: ['./restock.component.scss']
})
export class RestockComponent {

  restockForm = new FormGroup({
    100: new FormControl(undefined, [positiveIntegerValidator]),
    50: new FormControl(undefined, [positiveIntegerValidator]),
    20: new FormControl(undefined, [positiveIntegerValidator]),
    10: new FormControl(undefined, [positiveIntegerValidator]),
    5: new FormControl(undefined, [positiveIntegerValidator]),
    1: new FormControl(undefined, [positiveIntegerValidator])
  });

  constructor(private readonly store: Store) {}

  submit() {
    this.store.dispatch(addStock({ stock: this.restockForm.value as Partial<Funds> }));
  }
}
