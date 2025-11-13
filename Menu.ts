import readlinesync = require("readline-sync");
import { ProdutoController } from "./src/controller/ProdutoController";
import { Cliente } from "./src/model/Cliente";

const controller = new ProdutoController();

let opcao, opcaoAdmin, opcaoCliente: number;

do {
  console.log(`
###############################
💻  BEA'S DESKTOP STORE - MENU
###############################

Selecione uma opção:

  1 - Sou Administrador
_______________________________
  2 - Sou Cliente
_______________________________
  0 - Sair
_______________________________
`);

  opcao = Number(readlinesync.question("Digite a opção desejada: "));

  switch (opcao) {
    case 1:
      do {
        console.clear();
        console.log(`
===============================
     ÁREA DE ADMINITRAÇÃO
===============================

1 - Adicionar Produto
2 - Listar Produtos
3 - Atualizar Produto
4 - Remover Produto
0 - Voltar
`);
        opcaoAdmin = Number(readlinesync.question("Escolha uma opção: "));

        switch (opcaoAdmin) {
          case 1:
            console.log("\nCadastro de Produto\n");
            const nome = readlinesync.question("Nome do produto: ");
            const preco = Number(readlinesync.question("Preço: R$ "));
            const estoque = Number(
              readlinesync.question("Quantidade em estoque: ")
            );
            const novoProduto = new Cliente(
              controller.gerarId(),
              nome,
              preco,
              estoque,
              "Administrador",
              0
            );
            controller.criar(novoProduto);
            break;

          case 2:
            console.log("\nLista de Produtos:\n");
            controller.listar();
            break;

          case 3:
            console.log("\nAtualizar Produto\n");
            controller.listar();
            const idAtualizar = Number(
              readlinesync.question("\nDigite o ID do produto a atualizar: ")
            );
            const novoNome = readlinesync.question("Novo nome: ");
            const novoPreco = Number(readlinesync.question("Novo preço: R$ "));
            const novoEstoque = Number(readlinesync.question("Novo estoque: "));
            const produtoAtualizado = new Cliente(
              idAtualizar,
              novoNome,
              novoPreco,
              novoEstoque,
              "Administrador",
              0
            );
            controller.atualizar(produtoAtualizado);
            break;

          case 4:
            console.log("\nRemover Produto\n");
            controller.listar();
            console.log("O id é o numero da ordem de cadastro do produto\n")
            const idRemover = Number(
              readlinesync.question("\nDigite o ID do produto para remover: ")            
            );
            controller.deletar(idRemover);
            break;

          case 0:
            console.log("\n Voltando ao menu principal...");
            break;

          default:
            console.log("\nOpção inválida. Tente novamente!");
            break;
        }

        if (opcaoAdmin !== 0)
          readlinesync.question("\nPressione ENTER para continuar...");
      } while (opcaoAdmin !== 0);
      break;

    case 2:
      do {
        console.clear();
        console.log(`
===============================
        ÁREA DO CLIENTE
===============================

1 - Perfil
2 - Ver Lista de Produtos
3 - Realizar Compra
0 - Voltar
`);
        opcaoCliente = Number(readlinesync.question("Escolha uma opção: "));

        switch (opcaoCliente) {
          case 1:
            const nomeCliente = readlinesync.question("Digite seu nome: ");
            console.log(`\nBem-vindo(a), ${nomeCliente}!`);
            break;

          case 2:
            console.log("\nProdutos Disponíveis:");
            controller.listar();
            break;

          case 3:
            console.log("Comprar");
            controller.listar();
            const idCompra = Number(
              readlinesync.question(
                "\nDigite o ID do produto que deseja comprar: "
              )
            );
            const produto = (controller as any).buscarNoArray?.(idCompra);

            if (produto === null) {
              console.log("Produto não encontrado!");
            } else {
              const qtd = Number(
                readlinesync.question("Quantidade desejada: ")
              );
              if (produto.removerEstoque(qtd)) {
                console.log(
                  `\nCompra simulada com sucesso! Você comprou ${qtd}x ${produto.nome}`
                );
              }
            }
            break;

          case 0:
            console.log("\nVoltando ao menu principal...");
            break;

          default:
            console.log("\nOpção inválida. Tente novamente!");
            break;
        }

        if (opcaoCliente !== 0)
          readlinesync.question("\nPressione ENTER para continuar...");
      } while (opcaoCliente !== 0);
      break;

    case 0:
      console.log("\nEncerrando o sistema...");
      break;

    default:
      console.log("\nOpção inválida. Tente novamente!");
      readlinesync.question("\nPressione ENTER para continuar...");
      break;
  }
} while (opcao !== 0);
