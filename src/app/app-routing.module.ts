import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../lib/core/auth/guards/admin.guard';

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
    canActivate: [AdminGuard],
    canActivateChild: [AdminGuard],
    children: [
      {
        path: '',
        redirectTo: 'overview',
        pathMatch: 'full'
      },
      {
        path: 'overview',
        loadChildren: () => import('../lib/pages/admin/overview/overview.module').then(m => m.OverviewModule)
      },
      {
        path: 'restock',
        loadChildren: () => import('../lib/pages/admin/restock/restock.module').then(m => m.RestockModule)
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
