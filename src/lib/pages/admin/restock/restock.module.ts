import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestockComponent } from './restock.component';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { PushModule } from '@rx-angular/template/push';
import { RestockFormComponent } from './components/restock-form/restock-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { RestockFormFieldComponent } from './components/restock-form-field/restock-form-field.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

const routes: Routes = [
  {
    path: '',
    component: RestockComponent
  }
];

@NgModule({
  declarations: [
    RestockComponent,
    RestockFormComponent,
    RestockFormFieldComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatCardModule,
    PushModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatTooltipModule
  ]
})
export class RestockModule { }
