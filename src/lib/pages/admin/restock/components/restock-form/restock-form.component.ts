import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-restock-form',
  templateUrl: './restock-form.component.html',
  styleUrls: ['./restock-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RestockFormComponent {
  @Input() form!: FormGroup;
}
