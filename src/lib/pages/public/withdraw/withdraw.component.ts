import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { positiveIntegerValidator } from '../../../shared/validators/positive-integer.validator';
import { Store } from '@ngrx/store';
import { withdrawAmount } from '../../../core/funds/store/funds.actions';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.scss']
})
export class WithdrawComponent {
  withdrawAmountControl = new FormControl(null, [Validators.required, positiveIntegerValidator]);

  constructor(private readonly store: Store) {}

  withdraw() {
    this.store.dispatch(withdrawAmount({ amount: this.withdrawAmountControl.value as unknown as number }));
  }
}