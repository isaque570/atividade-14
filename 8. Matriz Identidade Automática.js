let matriz = []
for(let l=0;l<4;l++){
    matriz[l] = []
    for(let c=0;c<4;c++){
        if(l===c){
            matriz[l][c] = 1
        }
        else{
            matriz[l][c] = 0
        }
    }
}
for (let i = 0; i < 3; i++) {
  let linha = "";
  
  for (let j = 0; j < 3; j++) {
    linha += matriz[i][j] + "  ";
  }
  console.log(linha)
}
