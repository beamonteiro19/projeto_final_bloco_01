import { Produto } from "./Produto";

export class Cliente extends Produto {
  private nomeCliente: string;
  private numeroCliente: number;

  constructor(
    idCliente: number,
    nomeProduto: string,
    preco: number,
    estoque: number,
    nomeCliente: string,
    numeroCliente: number
  ) {
    super(idCliente, nomeProduto, preco, estoque);
    this.nomeCliente = nomeCliente;
    this.numeroCliente = numeroCliente;
  }

  public visualizar(): void {
    console.log("\n=== Detalhes da Compra ===");
    console.log(`Cliente: ${this.nomeCliente} (Nº ${this.numeroCliente})`);
    console.log(`Produto: ${this.getNomeProduto()}`);
    console.log(`Preço: R$ ${this.getPreco().toFixed(2)}`);
    console.log(`Estoque restante: ${this.getEstoque()}`);
  }
}
