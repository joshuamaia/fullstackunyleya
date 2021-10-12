import { Component, OnInit } from '@angular/core';
import { BaseResourceListComponent } from 'src/app/shared/components/base-resource-list/base-resource-list.component';
import { Produto } from '../shared/produto.model';
import { ProdutoService } from '../shared/produto.service';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.css'],
})
export class ProdutoListComponent extends BaseResourceListComponent<Produto> {
  constructor(private produtoService: ProdutoService) {
    super(produtoService);
  }
}
