let matriz_a =[];
let matriz_b = [];
let matriz_c = [];
for(let l=0;l<2;l++){
    matriz_a[l] = [];
    for(let c=0;c<3;c++){
        let valor = Number(prompt(`Digite um valor para [${l}][${c}]: `));
        matriz_a[l][c] = valor;
    }
}
for(l=0;l<2;l++){
    matriz_b[l] = [];
    for(c=0;c<3;c++){
        valor = Number(prompt(`Digite um valor para [${l}][${c}]: `));
        matriz_b[l][c] = valor;
    }
}
for(l=0;l<2;l++){
     matriz_c[l] = [];
    for(c=0;c<3;c++){
        matriz_c[l][c] = matriz_a[l][c] + matriz_b[l][c];
    }
}

console.log("=== Matriz C ===");
for (let l = 0; l < 2; l++) {
    let linha = "";
    for (let c = 0; c < 3; c++) {
        linha = linha + matriz_c[l][c] + "  ";
    }
    console.log(linha);
}