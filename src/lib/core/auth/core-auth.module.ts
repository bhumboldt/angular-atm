import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { authReducer, FEATURE_NAME } from './store/auth.reducer';
import { AuthEffects } from './store/auth.effects';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatDialogModule,
    MatSnackBarModule,
    StoreModule.forFeature(FEATURE_NAME, authReducer),
    EffectsModule.forFeature([AuthEffects])
  ]
})
export class CoreAuthModule { }
