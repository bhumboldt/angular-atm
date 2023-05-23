import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-withdraw-form-field',
  templateUrl: './withdraw-form-field.component.html',
  styleUrls: ['./withdraw-form-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WithdrawFormFieldComponent {
  @Input() control!: FormControl;
  @Output() submitted = new EventEmitter();
}
