import readlinesync = require("readline-sync");

let opcao: number;

do {

  console.log(
`
###############################\n
💻  BEA'S DESKTOP STORE - MENU\n
###############################\n    

Selecione uma opção:\n  

      1 - Sou Administrador
_______________________________\n   
      2 - Sou Cliente  
_______________________________\n  
      0 - Sair
_______________________________\n    
    
`)

  opcao = Number(readlinesync.question("Digite a opção desejada: "));

  switch (opcao) {
    case 1:
      console.log("\nAcesso área do Administrador");
      console.log("1 - Adicionar Produto");
      console.log("2 - Listar Produtos");
      console.log("3 - Atualizar Produto");
      console.log("4 - Remover Produto");
      console.log("5 - Listar Clientes");
      console.log("0 - Voltar");
      readlinesync.question("\nPressione ENTER para continuar...");
      break;

    case 2:
      console.log("\nAcesso área do Cliente");
      console.log("1 - Identificar Cliente");
      console.log("2 - Listar Produtos Disponíveis");
      console.log("3 - Realizar Compra");
      console.log("4 - Consultar Compras");
      console.log("0 - Voltar");
      readlinesync.question("\nPressione ENTER para continuar...");
      break;

    case 0:
      console.log("\nEncerrando o sistema...");
      break;

    default:
      console.log("\nOpção inválida. Tente novamente!");
      break;
  }

} while (opcao !== 0);
