let notas = [5]
let media
let aprovados = 0
for(let i=0;i<5;i++){
    notas[i] = Number(prompt(`Digite a nota do aluno ${i}: `));
}
media = (notas[0] + notas[1] + notas[2] + notas[3] + notas[4]) / 5
for(i=0;i<5;i++){
    if(notas[i]>media){
        aprovados += 1
    }
}
console.log(`A média de notas é ${media}`)
console.log(`A quantidade de alunos que tiveram notas acima da média é: ${aprovados}`)