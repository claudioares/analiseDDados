import {calcularMedia} from './calcMedia.mjs'
import {dados} from './util.mjs'


  function calcularCorrelacao(x, y) {
    if (x.length !== y.length) {
      throw new Error("Os arrays devem ter o mesmo tamanho");
    }
  
    const mediaX = calcularMedia(x);
    const mediaY = calcularMedia(y);
  
    let somaXY = 0;
    let somaXQuadrado = 0;
    let somaYQuadrado = 0;
  
    for (let i = 0; i < x.length; i++) {
      somaXY += (x[i] - mediaX) * (y[i] - mediaY);
      somaXQuadrado += (x[i] - mediaX) ** 2;
      somaYQuadrado += (y[i] - mediaY) ** 2;
    }
  
    const correlacao = somaXY / Math.sqrt(somaXQuadrado * somaYQuadrado);
  
    return correlacao.toFixed(4);
  }
  
  const variavelX = dados.altura;
  const variavelY = dados.mc
  
  export const correlacao = calcularCorrelacao(variavelX, variavelY);
  // console.log("Correlação:", correlacao);
  