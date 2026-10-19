class videojuego {
    constructor(nombre, genero) {
        this.nombre = nombre;
        this.genero = genero;
        this.horas = 0;
    }
    
    mostrar(){
        console.log(this.nombre+" - "+this.genero+" - "+this.horas+" horas.");
    }

    incrementarHoras(horas){
        this.horas+=horas;
    }
    establecerCero () {
        this.horas = 0;
    }
    
    //Ampliación
    mostarSiHoras (horas) {
        return this.horas>horas;
    }

}