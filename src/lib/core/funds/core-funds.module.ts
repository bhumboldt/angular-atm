import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { FEATURE_NAME, fundsReducer } from './store/funds.reducer';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { EffectsModule } from '@ngrx/effects';
import { FundsEffects } from './store/funds.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(FEATURE_NAME, fundsReducer),
    EffectsModule.forFeature([FundsEffects]),
    MatSnackBarModule
  ]
})
export class CoreFundsModule {}
