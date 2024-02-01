import {correlacao} from './calcCorrelacao.mjs'
import {desvioAmostraX, desvioAmostray} from './calcDesvioPadrao.mjs'
import {mediaX, mediaY} from './calcMedia.mjs'


function minimosQuadrados (correlacaon, desvioX, desvioY, mX, mY) {


    const inclinacao = correlacaon * (desvioY / desvioX);

    const intercepto = mY - inclinacao * mX;
    
    const minimoQuadrado = intercepto + inclinacao;
    
    return minimoQuadrado.toFixed(4)
}


console.log(minimosQuadrados(correlacao, desvioAmostraX, desvioAmostray, mediaX, mediaY))
