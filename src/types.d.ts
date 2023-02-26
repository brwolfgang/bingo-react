export type ConfiguracaoProps = {
  palavraBingo: string,
  handleChangePalavraBingo: (novaPalavra: string) => void
}

export type AppState = {
  palavraBingo: string,
  numeros: NumeroType[],
  qtdeNumerosSorteados: number,
  numeroRecemSorteado?: NumeroSorteadoType,
  exibirConfiguracao: boolean
}

export type NumeroSorteadoType = {
  letra: string
  sorteado: boolean,
  ordem: number
}

export type ReinicioSorteioProps = {
  reiniciarSorteio: () => void
}

export type NumeroProps = {
  isSorteado: boolean,
  valor: number,
  ordem: number
}

export type NumeroType = {
  valor: number,
  sorteado: boolean,
  letra?: string
  order?: number
}