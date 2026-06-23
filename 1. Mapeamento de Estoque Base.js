let produtos = []
let soma = 0
for(let i=0; i<8; i++){
    produtos[i] = Number(prompt("Digite a quantidade de caixas de 8 produtos diferentes: "));
    soma += produtos[i]
    console.log(`A quantidade de caixas do produto ${i} é ${produtos[i]}`)
}
console.log(`A soma total de caixas de produtos é ${soma}`)