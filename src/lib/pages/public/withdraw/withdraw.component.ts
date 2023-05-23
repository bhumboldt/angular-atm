import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { positiveIntegerValidator } from '../../../shared/validators/positive-integer.validator';
import { Store } from '@ngrx/store';
import { withdrawAmount } from '../../../core/funds/store/funds.actions';
import { showAdminPasswordModal } from '../../../core/auth/store/auth.actions';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.scss']
})
export class WithdrawComponent {
  withdrawAmountControl = new FormControl(null, [Validators.required, positiveIntegerValidator, Validators.max(2000)]);

  constructor(private readonly store: Store) {}

  withdraw() {
    if (this.withdrawAmountControl.valid) {
      this.store.dispatch(withdrawAmount({ amount: this.withdrawAmountControl.value as unknown as number }));
    }
  }

  showAdminPasswordModal() {
    this.store.dispatch(showAdminPasswordModal());
  }
}
