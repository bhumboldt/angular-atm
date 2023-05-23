import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WithdrawComponent } from './withdraw.component';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [
  {
    path: '',
    component: WithdrawComponent
  }
]

@NgModule({
  declarations: [
    WithdrawComponent
  ],
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		MatCardModule,
		MatButtonModule,
		MatInputModule,
		MatFormFieldModule,
		ReactiveFormsModule,
		MatTooltipModule,
    MatIconModule
	]
})
export class WithdrawModule { }
