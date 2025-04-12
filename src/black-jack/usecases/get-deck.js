//refactorizacion de obtener carta
// Esta función me permite tomar una carta
/**
 * 
 * @param {Array<String>} deck Debe ser un arreglo de string
 * @returns {string} retorna la carta como string
 */
export const pedirCarta = (deck) => {
    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}