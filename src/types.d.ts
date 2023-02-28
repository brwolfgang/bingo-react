export type AppState = {
  palavraBingo: string
}

export type PainelBingoProps = {
  palavraBingo: string
}

export type PainelBingoState = {
  numeros: NumeroSorteadoType[],
  qtdeNumerosSorteados: number,
  numeroRecemSorteado?: NumeroSorteadoType,
}

export type NumeroSorteadoType = {
  valor: number
  letra?: string
  sorteado: boolean,
  ordem?: number
}