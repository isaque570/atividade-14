let desempenho = [];
for(let l=0; l<4; l++){
    desempenho[l] = [];
    for(let c=0; c<3; c++){
        valor = Number(prompt(`Digite um valor para [${l}][${c}]: `));
        desempenho[l][c] = valor;
    }
}
let maior = 0;
for(l=0; l<4; l++){
    for(c=0;c<3;c++){
        if(desempenho[l][c]>maior){
            maior = desempenho[l][c];
        }
    }   
    console.log(`Equipe: ${l+1} ====> Maior pontuação: ${maior} `);
}