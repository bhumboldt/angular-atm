import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'public',
    children: [
      {
        path: '',
        redirectTo: 'withdraw',
        pathMatch: 'full'
      },
      {
        path: 'withdraw',
        loadChildren: () => import('../lib/pages/public/withdraw/withdraw.module').then(m => m.WithdrawModule)
      },
    ]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'public'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
