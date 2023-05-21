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
    path: 'admin',
    children: [
      {
        path: '',
        redirectTo: 'overview',
        pathMatch: 'full'
      },
      {
        path: 'overview',
        loadChildren: () => import('../lib/pages/admin/overview/overview.module').then(m => m.OverviewModule)
      }
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
