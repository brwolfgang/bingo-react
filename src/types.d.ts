export type ConfiguracaoProps = {
  palavraBingo: string,
  handleChangePalavraBingo: (novaPalavra: string) => void
}

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

export type ReinicioSorteioProps = {
  reiniciarSorteio: () => void
}

export type NumeroProps = {
  isSorteado: boolean,
  valor: number,
  ordem?: number
}