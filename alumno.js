class alumno {
    
    constructor (nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
        this.asignaturas = [];
    }
    
    mostar_asignaturas() {
        for (let i =0; i<this.asignaturas.length;i++){
            console.log(this.asignaturas[i]);
        }
    }
    
    cargar_asignatura (asignatura) {
        this.asignaturas.push(asignatura);
    }
    cumplir(){
        this.edad++;
    }

}