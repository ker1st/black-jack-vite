import _ from 'underscore' 

// Esta función crea un nuevo deck

// export const myName = 'Rogelio'; 

/**
 * 
 * @param {Array<String>} tiposDeCarta Ejemplo: ['C', 'D', 'H', 'S']
 * @param {Array<String>} tiposEspeciales Ejemplo: ['A', 'J', 'Q', 'K']
 * @returns {Array<String>} retorna un nuevo deck de cartas
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if( !tiposDeCarta || tiposDeCarta.length === 0 )
        throw  new Error('TiposDeCarta es obligatorio además tiene que ser un arreglo de string');

    if( !tiposEspeciales || tiposEspeciales.length === 0 )
        throw  new Error('TiposEspeciales es obligatorio además tiene que ser un arreglo de string');

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    console.log( deck );
    return deck;
}

//Ejemplo de exportacion por default
//export default crearDeck;