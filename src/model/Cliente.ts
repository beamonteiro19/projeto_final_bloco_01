import { Produto } from "./Produto";

export class Cliente extends Produto {
  private _nomeCliente: string;
  private _numeroCliente: number;

  constructor(
    id: number,
    nomeProduto: string,
    preco: number,
    estoque: number,
    nomeCliente: string,
    numeroCliente: number
  ) {
    super(id, nomeProduto, preco, estoque);
    this._nomeCliente = nomeCliente;
    this._numeroCliente = numeroCliente;
  }

  public get nomeCliente(): string {
    return this._nomeCliente;
  }

  public set nomeCliente(valor: string) {
    this._nomeCliente = valor;
  }

  public get numeroCliente(): number {
    return this._numeroCliente;
  }

  public set numeroCliente(valor: number) {
    this._numeroCliente = valor;
  }

  public visualizar(): void {
    console.log(`
****************************************************
DADOS DO PRODUTO
****************************************************
ID: ${this.id}
Nome: ${this.nomeProduto}
Preço: R$ ${this.preco.toFixed(2)}
Estoque disponível: ${this.estoque}
****************************************************
`);
  }
}
