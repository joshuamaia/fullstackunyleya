import { Injectable, Injector } from '@angular/core';
import { UtilService } from 'src/app/shared/services/util.service';

import { BaseResourceService } from '../../../shared/services/base-resource.service';
import { Produto } from './produto.model';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService extends BaseResourceService<Produto> {
  constructor(protected injector: Injector) {
    super(`${UtilService.BASE_URL}/produto`, injector, Produto.fromJson);
  }
}
