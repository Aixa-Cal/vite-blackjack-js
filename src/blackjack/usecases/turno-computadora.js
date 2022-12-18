import {pedirCarta, valorCarta, crearCartaHTML} from './'

/**
 * 
 * @param {Number} puntosMinimos puntos mínumos que la computadora necesita para ganar.
 * @param {HTMLElement} puntosMinimos elemento HTML para mostrar los puntos.
 * @param {HTMLElement} divCartasComputadora elemento HTML para mostrar las cartas.
 * @param {Array<String>} deck 
 */

//Turno de la computadora

export const turnoComputadora = (puntosMinimos, puntosHTML, divCartasComputadora,  deck = []) => {

    if ( !puntosMinimos ) throw new Error('Puntos mínimos son necesarios');
    if (!puntosHTML) throw new Error ('Argumentos puntosHTML es necesario');

    let puntosComputadora = 0;
    do {
        const carta = pedirCarta( deck );

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        const imgCarta = crearCartaHTML( carta );
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert(`No hay ganador: Puntaje: Jugador ${puntosJugador} | Computadora ${puntosComputadora}`);
        } else if ( puntosMinimos > 21 ) {
            alert(`Computadora gana. Puntaje: Jugador ${puntosJugador} | Computadora ${puntosComputadora}`)
        } else if( puntosComputadora > 21 ) {
            alert(`Jugador Gana. Puntaje: Jugador ${puntosJugador} | Computadora ${puntosComputadora}`);
        } else {
            alert(`Computadora Gana. Puntaje: Jugador ${puntosJugador} | Computadora ${puntosComputadora}`)
        }
    }, "5 second" );
}