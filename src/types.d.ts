export type AppState = {
  palavraBingo: string,
  numeros: NumeroSorteadoType[],
  qtdeNumerosSorteados: number,
  numeroRecemSorteado?: NumeroSorteadoType,
  exibirConfiguracao: boolean
}

export type NumeroSorteadoType = {
  valor: number
  letra?: string
  sorteado: boolean,
  ordem?: number
}