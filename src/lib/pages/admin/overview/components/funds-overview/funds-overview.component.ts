import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { OverviewFunds } from '../../models/overview-funds.model';

@Component({
  selector: 'app-funds-overview',
  templateUrl: './funds-overview.component.html',
  styleUrls: ['./funds-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FundsOverviewComponent {
  @Input() funds: OverviewFunds[] = [];
}
