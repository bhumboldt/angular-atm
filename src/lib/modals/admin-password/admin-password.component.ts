import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { submitAdminPassword } from '../../core/auth/store/auth.actions';

@Component({
  selector: 'app-admin-password',
  templateUrl: './admin-password.component.html',
  styleUrls: ['./admin-password.component.scss']
})
export class AdminPasswordComponent {
  passwordControl = new FormControl('', [Validators.required]);

  constructor(
    private readonly store: Store
  ) {}

  submit() {
    if (this.passwordControl.valid) {
      this.store.dispatch(submitAdminPassword({ password: this.passwordControl.value as string }));
    }
  }
}
