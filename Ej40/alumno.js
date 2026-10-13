class alumno {
    constructor(nombre, apellido, edad, nota) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.nota = nota;
    }

    mostrar(){
        console.log(this.nombre+" - "+this.apellido+" - "+this.edad+" años - "+this.nota);
    }
    modificar_nota(nota){
        this.nota= nota;
    }
    esMayor(){
        return this.edad >= 18;
    }
    cumplir(){
        this.edad++;
    }
}