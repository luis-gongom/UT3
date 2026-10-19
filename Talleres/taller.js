class Taller {
    constructor(nombre, poblacion) {
        this.nombre = nombre;
        this.poblacion = poblacion;
        this.coches = [];
    }
    
    mostrar(){
        console.log(this.nombre+" - "+this.poblacion);
        console.log("COCHES EN EL TALLER");
        this.coches.map(coche => coche.mostrar());
    }

    cargarCoche (coche){
        this.coches.push(coche)
    }
    modificarCoche(indice, marca, modelo){
        this.coches[indice].modificar(marca, modelo);
    }

}