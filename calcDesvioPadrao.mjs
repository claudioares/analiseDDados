import {dados} from './util.mjs'

const variavelX = dados.altura;
const variavelY = dados.mc;

  
function calcularDesvioPadraoPopulacao(arr) {
  const media = arr.reduce((acc, valor) => acc + valor, 0) / arr.length;
  const diferencaQuadrada = arr.map(valor => Math.pow(valor - media, 2));
  const mediaDiferencaQuadrada = diferencaQuadrada.reduce((acc, valor) => acc + valor, 0) / arr.length;
  const desvioPadraoPopulacao = Math.sqrt(mediaDiferencaQuadrada);

  return desvioPadraoPopulacao.toFixed(4);
}

function calcularDesvioPadraoAmostra(arr) {
  const media = arr.reduce((acc, valor) => acc + valor, 0) / arr.length;
  const diferencaQuadrada = arr.map(valor => Math.pow(valor - media, 2));
  const mediaDiferencaQuadrada = diferencaQuadrada.reduce((acc, valor) => acc + valor, 0) / (arr.length - 1); // Usando (N-1)
  const desvioPadraoAmostra = Math.sqrt(mediaDiferencaQuadrada);

  return desvioPadraoAmostra.toFixed(4);
}


const desvioPopulacaoX = calcularDesvioPadraoPopulacao(variavelX);
const desvioPopulacaoy = calcularDesvioPadraoPopulacao(variavelY);
// console.log(`Desvio padrão da populaçãoX: ${desvioPopulacaoX}`);
// console.log(`Desvio padrão da populaçãoy: ${desvioPopulacaoy}`);


export const desvioAmostraX = calcularDesvioPadraoAmostra(variavelX);
export const desvioAmostray = calcularDesvioPadraoAmostra(variavelY);
// console.log(`Desvio padrão da amostraX: ${desvioAmostraX}`);
// console.log(`Desvio padrão da amostraY: ${desvioAmostray}`);

