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

const routes: Routes = [
  {
    path: '',
    component: RestockComponent
  }
];

@NgModule({
  declarations: [
    RestockComponent,
    RestockFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatCardModule,
    PushModule,
    ReactiveFormsModule,
    MatInputModule
  ]
})
export class RestockModule { }
