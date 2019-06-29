// funcion de primera clase con propiedades.
function Jugador(nombre) {

    this.nombre = nombre;
    this.pv = 100;
    this.sp = 100;

    this.curar = function (jugadorObjetivo) {
        if (this.sp >= 40) {
            this.sp -= 40;

            // jugadorObjetivo.pv = jugadorObjetivo.pv + 20;
            jugadorObjetivo.pv += 20; // igual que la notacion de arriba.
        } else {
            console.info(this.nombre + " No tienes suficiente sp");
        }

        this.estado(jugadorObjetivo);

    }
    this.darGolpe = function(jugadorObjetivo){
        if(jugadorObjetivo.pv > 50){
            jugadorObjetivo.pv -= 50;
        }else{
            jugadorObjetivo.pv = 0;
            console.error(jugadorObjetivo.nombre + " Murio!!")
        }

        this.estado(jugadorObjetivo);
    }

    this.tirarFlecha = function (jugadorObjetivo) {
        if (jugadorObjetivo.pv > 40) {
            jugadorObjetivo.pv -= 40;

        } else {
            jugadorObjetivo.pv = 0;
            console.error(jugadorObjetivo.nombre + " Ha muerto");
        }
        this.estado(jugadorObjetivo);

    }


    this.estado = function (jugadorObjetivo) {
        console.info(this);
        console.info(jugadorObjetivo);
    }
};


// JUGADORES - objetos creados a traves de la funcion de primera clase Jugador().

var gandalf = new Jugador("Gandalf");
var legolas = new Jugador("Legolas");

console.log(gandalf);
console.log(legolas);



























