import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutoListComponent } from './produto-list/produto-list.component';
import { ProdutoFormComponent } from './produto-form/produto-form.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ProdutoListComponent, ProdutoFormComponent],
  imports: [CommonModule, SharedModule, ProdutosRoutingModule],
})
export class ProdutosModule {}
