function pedir_nomes(alunos = [6]){
    for(let i=0;i<6;i++){
        alunos[i] = prompt("Digite o nome do aluno: ")
    }

    for(let i=5;i>=0;i--){
        console.log(`Nome do aluno: ${alunos[i]}`)
    }
}
let alunos = [6]
pedir_nomes(alunos)
