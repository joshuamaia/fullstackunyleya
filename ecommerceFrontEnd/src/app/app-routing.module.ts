import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'produtos',
    loadChildren: () =>
      import('./pages/produtos/produtos.module').then((m) => m.ProdutosModule),
  },

  { path: '', redirectTo: '/reports', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
