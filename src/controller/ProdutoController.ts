import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";

export class ProdutoController implements ProdutoRepository {
  private listaProdutos: Array<Produto> = new Array<Produto>();
  private proximoId: number = 0;

  public procurarPorId(id: number): void {
    let produto = this.buscarNoArray(id);

    if (produto != null) {
      produto.visualizar();
    } else {
      console.log(`\nO produto com ID ${id} não foi encontrado!`);
    }
  }

  public listar(): void {
    if (this.listaProdutos.length === 0) {
      console.log("\nNenhum produto cadastrado!");
    } else {
      console.log("\nLista de produtos cadastrados:");
      for (let produto of this.listaProdutos) {
        produto.visualizar();
      }
    }
  }

  public criar(produto: Produto): void {
    this.listaProdutos.push(produto);
    console.log(`\nO produto '${produto.nomeProduto}' foi adicionado com sucesso!`);
  }

  public atualizar(produto: Produto): void {
    let buscarProduto = this.buscarNoArray(produto.id);

    if (buscarProduto != null) {
      this.listaProdutos[this.listaProdutos.indexOf(buscarProduto)] = produto;
      console.log(`\nO produto ID ${produto.id} foi atualizado com sucesso!`);
    } else {
      console.log(`\nO produto ID ${produto.id} não foi encontrado!`);
    }
  }

  public deletar(id: number): void {
    let produto = this.buscarNoArray(id);

    if (produto != null) {
      this.listaProdutos.splice(this.listaProdutos.indexOf(produto), 1);
      console.log(`\nProduto ID ${id} removido com sucesso!`);
    } else {
      console.log(`\nProduto ID ${id} não encontrado!`);
    }
  }

  public gerarId(): number {
    return ++this.proximoId;
  }

  private buscarNoArray(id: number): Produto | null {
    for (let produto of this.listaProdutos) {
      if (produto.id === id) return produto;
    }
    return null;
  }
}
