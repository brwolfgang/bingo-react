/**
 * Identifica se o texto ou array passado é vazio.
 * @param texto
 */
const isEmpty = (texto?: string | string[]): boolean => {
    if (typeof texto === 'string') {
        return texto.trim().length === 0
    } else {
        return texto?.length === 0
    }
}