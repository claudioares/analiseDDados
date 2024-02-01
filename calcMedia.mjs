import { dados } from './util.mjs'

export function calcularMedia(arr) {
    const soma = arr.reduce((acumulador, valor) => acumulador + valor, 0);
    const mediaCalculada = soma / arr.length;

    return mediaCalculada
  }


export const mediaX = calcularMedia(dados.altura)
export const mediaY = calcularMedia(dados.mc)