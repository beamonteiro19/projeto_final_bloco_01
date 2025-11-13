export abstract class Produto {
  private idProduto: number;
  private _nomeProduto: string;
  private _preco: number;
  private _estoque: number;

  constructor(id: number, nome: string, preco: number, estoque: number) {
    this.idProduto = id;
    this._nomeProduto = nome;
    this._preco = preco;
    this._estoque = estoque;
  }

  public get id(): number {
    return this.idProduto;
  }

  public set id(valor: number) {
    this.idProduto = valor;
  }

  public get nomeProduto(): string {
    return this._nomeProduto;
  }

  public set nomeProduto(valor: string) {
    this._nomeProduto = valor;
  }

  public get preco(): number {
    return this._preco;
  }

  public set preco(valor: number) {
    this._preco = valor;
  }

  public get estoque(): number {
    return this._estoque;
  }

  public set estoque(valor: number) {
    this._estoque = valor;
  }

  public adicionarEstoque(qtd: number): void {
    this._estoque += qtd;
  }

  public removerEstoque(qtd: number): boolean {
    if (this._estoque < qtd) {
      console.log("\nEstoque insuficiente!");
      return false;
    }
    this._estoque -= qtd;
    return true;
  }

  public abstract visualizar(): void;
}
