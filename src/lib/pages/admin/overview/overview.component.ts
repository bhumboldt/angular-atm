import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { sortedDisplayFunds } from './overview.selectors';
import { withdrawals } from '../../../core/funds/store/funds.selectors';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {
  availableFunds$ = this.store.select(sortedDisplayFunds);
  transactions$ = this.store.select(withdrawals);

   constructor(private readonly store: Store) {}
}
