let matriz = [];

for (let i = 0; i < 3; i++) {
  matriz[i] = [];

  for (let j = 0; j < 3; j++) {
    let valor = prompt(`Digite o valor para [${i}][${j}]:`);
    matriz[i][j] = Number(valor);
  }
}
for (let i = 0; i < 3; i++) {
  let linha = "";
  
  for (let j = 0; j < 3; j++) {
    linha = linha + matriz[i][j] + "  ";
  }

  console.log(linha);
}