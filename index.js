const prompt = require('prompt-sync')();
var array_refrigerantes = [];

do {
  console.log("Sistema de Cadastro de Refrigerante");
  console.log("1 - Inserir Refrigerante");
  console.log("2 - Excluir Refrigerante");
  console.log("3 - Listar Refrigerantes");
  console.log("0 - Sair");

  var opcao = prompt("Digite sua opção: ");

  if (opcao == 1) {
    console.log("\n\nInserindo Refrigerante...\n");
    let codigo = parseInt(prompt("Digite o código: "));
    let marca = prompt("Digite o marca: ");
    let sabor = prompt("Digite o sabor: ");
    let capacidade = prompt("Digite a capacidade em Ml da embalagem: ");
    let estado = prompt("Digite o estado: ");

    // Neste trecho estamos declarando um objeto
    const refrigerante = {
      codigo: codigo,
      marca: marca,
      sabor: sabor,
      capacidade: capacidade,
      estado: estado
    }
    inserir_refrigerante(refrigerante);
  
    // Chamar a função inserir
  } else if (opcao == 2) {
    console.log("\n\nExcluindo refrigerante...\n");
    let codigo = parseInt(prompt("Digite o código do refrigerante: "));
    excluir_refrigerante(codigo);
    // Chamar a função excluir
  } else if (opcao == 3) {
    console.log("\n\nListando refrigerantes...\n");
    listar_refrigerantes();
    // Chamar a função listar
  } else {
    console.log("\n\nSaindo do programa...\n");
  }

  prompt("\nEnter para continuar...");
  console.clear();
} while (opcao != 0)


function inserir_refrigerante(refrigerante) {
  array_refrigerantes.push(refrigerante);
}

function excluir_refrigerante(codigo){
  lista = array_refrigerantes.length
  console.log(lista);
  for(i = 0; i < lista; i++){
    c = array_refrigerantes[i];
    if(codigo == c.codigo){
      array_refrigerantes.splice(i, 1);
      break;
    }
  }
  
}

function listar_refrigerantes() {
  lista = array_refrigerantes.length
  for(i = 0; i < lista; i++){
    c = array_refrigerantes[i];
    console.log(c.codigo);
    console.log(c.marca);
    console.log(c.sabor);
    console.log(c.capacidade);
    console.log(c.estado);
    console.log("-------------------");
  }
  
  
  // Implementar corpo da função
}


