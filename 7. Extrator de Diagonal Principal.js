let matriz = []
for(let l=0;l<3;l++){
    matriz[l] = []
    for(let c=0;c<3;c++){
        let valor = Number(prompt(`Digite um valor para [${l}][${c}]`))
        matriz[l][c] = valor
    }
}
let soma = matriz[0][0] + matriz[1][1] + matriz[2][2]
alert("A soma da diagonal principal da matriz digitada é: " + soma)