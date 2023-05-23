import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-restock-form-field',
  templateUrl: './restock-form-field.component.html',
  styleUrls: ['./restock-form-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RestockFormFieldComponent {
  @Input() control!: FormControl;
  @Input() dollarAmount!: string;
}
