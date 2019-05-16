function mmc (numeros) {
  let menorNumeroPrimo = 2;
  let produtoNumerosPrimos = 1;
  let dividiu = false;
  
  while(true) {
    for(let i=0; i < numeros.length;i++) {
      if(numeros[i] % menorNumeroPrimo === 0) {
        dividiu = true;
        numeros[i] = numeros[i] / menorNumeroPrimo;
      }
    }
    
    if(dividiu){
      produtoNumerosPrimos *= menorNumeroPrimo;      
      let linha = numeros.join(",")+"|"+menorNumeroPrimo+" -> "+produtoNumerosPrimos;
      console.log(linha);
    } else {
      menorNumeroPrimo++;
    }
    dividiu=false;
    const soma = numeros.reduce((partial_sum, a) => partial_sum + a,0);
    if(soma==numeros.length) break;
  }
}

mmc([144,26,10]);
