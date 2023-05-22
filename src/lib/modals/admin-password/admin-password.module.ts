import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPasswordComponent } from './admin-password.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';



@NgModule({
  declarations: [
    AdminPasswordComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  exports: [
    AdminPasswordComponent
  ]
})
export class AdminPasswordModule { }
