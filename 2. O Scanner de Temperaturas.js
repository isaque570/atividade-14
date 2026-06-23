let dias = [10]
let maior = 0
let indice = 0
for(let i=0;i<10;i++){
    dias[i] = Number(prompt("Digite uma temperatura: "));
    if(dias[i]>maior){
        maior = dias[i]
        indice = i
    }
    console.log(`A temperatura média do dia ${i} é ${dias[i]}`)
    
}
console.log(`A maior média de temperatura registrada foi: ${maior}, no dia ${indice}`)