import { BaseResourceModel } from '../../../shared/models/base-resource.model';

export class Produto extends BaseResourceModel {
  constructor(
    public id?: string,
    public codigo?: string,
    public nome?: string,
    public preco?: number
  ) {
    super();
  }

  static fromJson(jsonData: any): Produto {
    return Object.assign(new Produto(), jsonData);
  }
}
