import { pedirCarta, valorCarta } from './'
import { createCartaHTML } from './create-car-html';

//turno de la PC
/**
 * 
 * @param {Number} puntosMinimos puntos minimos que necesita la computadora para ganar
 * @param {HTMLElement} puntosHTML Html para mostrar los puntos
 * @param {HTMLElement} divCartasComputadora Elemento HTML para 
 * @param {Array<String>} deck Arreglo de cartas
 */
export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora,deck  = []) => {

    if( !puntosMinimos ) throw new Error('Puntos mínimos son necesarios');
    // if( !deck ) throw new Error('El deck es necesario');

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        
        const imgCarta = createCartaHTML( carta );
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}           