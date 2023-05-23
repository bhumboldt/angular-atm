import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-restock-form',
  templateUrl: './restock-form.component.html',
  styleUrls: ['./restock-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RestockFormComponent {
  @Input() form!: FormGroup;
  @Output() submitted = new EventEmitter();

  get $100(): FormControl {
    return this.form.get('100') as FormControl;
  }
  get $50(): FormControl {
    return this.form.get('50') as FormControl;
  }
  get $20(): FormControl {
    return this.form.get('20') as FormControl;
  }
  get $10(): FormControl {
    return this.form.get('10') as FormControl;
  }
  get $5(): FormControl {
    return this.form.get('5') as FormControl;
  }
  get $1(): FormControl {
    return this.form.get('1') as FormControl;
  }
}
