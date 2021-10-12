import { Component, Injector, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form/base-resource-form.component';
import { Produto } from '../shared/produto.model';
import { ProdutoService } from '../shared/produto.service';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css'],
})
export class ProdutoFormComponent extends BaseResourceFormComponent<Produto> {
  constructor(
    protected produtoService: ProdutoService,
    protected injector: Injector
  ) {
    super(injector, new Produto(), produtoService, Produto.fromJson);
  }

  protected buildResourceForm() {
    this.resourceForm = this.formBuilder.group({
      id: [null],
      codigo: [null, [Validators.required]],
      nome: [null, [Validators.required]],
      preco: [null, [Validators.required]],
    });
  }

  protected creationPageTitle(): string {
    return 'Cadastro de Novo Produto';
  }

  protected editionPageTitle(): string {
    const nomeProduto = this.resource.nome || '';
    return 'Editando Produto: ' + nomeProduto;
  }
}
