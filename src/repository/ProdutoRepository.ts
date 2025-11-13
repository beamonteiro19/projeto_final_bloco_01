import { Produto } from "../model/Produto"

export interface Repository {
  criar(produto: Produto): void;
  listar(): void;
  atualizar(produto: Produto): void;
  deletar(id: number): void;
}
