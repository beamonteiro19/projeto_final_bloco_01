export abstract class Produto {
  private _idProduto: number;
  private _nomeProduto: string;
  private _preco: number;
  private _estoque: number;

  constructor(
    _idProduto: number,
    nomeProduto: string,
    preco: number,
    estoque: number
  ) {
    this._idProduto = _idProduto; // ← esta linha estava faltando
    this._nomeProduto = nomeProduto;
    this._preco = preco;
    this._estoque = estoque;
  }

  public getId(): number {
    return this._idProduto;
  }

  public getNomeProduto(): string {
    return this._nomeProduto;
  }

  public getPreco(): number {
    return this._preco;
  }

  public getEstoque(): number {
    return this._estoque;
  }

  public setPreco(novoPreco: number): void {
    this._preco = novoPreco;
  }

  public setEstoque(novoEstoque: number): void {
    this._estoque = novoEstoque;
  }

  public abstract visualizar(): void;
}