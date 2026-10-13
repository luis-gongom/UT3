let alumnos = [];

let cargar_alumnos = () => {
    let cantidad = Number(prompt("Introduce numero de alumnos: "));
    for (let i=0;i<cantidad;i++){
        let nombre = prompt("Introduce nombre: ");
        let apellido = prompt("Introduce apellido: ");
        let edad = Number(prompt("Introduce edad: "));
        let nota = Number(prompt("Introduce nota: "));
        let nuevo = new alumno (nombre, apellido, edad, nota);
        alumnos.push(nuevo);
    }
}
let mostrar_alumnos = (alumnos) => {
    for (let i =0; i<alumnos.length;i++){
        alumnos[i].mostrar();
    }
}
let calcular_media = () => {
    return alumnos.reduce((acc, alumno) => acc+alumno.nota, 0)/alumnos.length;
}

let buscar_alumno = () => {
    let nombre = prompt("Indica nombre de alumno a buscar: ");
    let apellido = prompt("Indica apellido de alumno a buscar: ");
    let edad = Number(prompt("Indica edad de alumno a buscar: "));
    for (let i=0; i<alumnos.length; i++){
        if(nombre == alumnos[i].nombre && apellido == alumnos[i].apellido && edad == alumnos[i].edad){
            return i;
        }
    }
    return -1;
}

let modicar_nota = () => {
    let index = buscar_alumno();
    if (index != -1){
        let nota = Number(prompt("Indica nueva nota: "));
        alumnos[index].modificar_nota(nota);
    }else{
        console.log("EL ALUNO NO EXISTE");
    }
    
}
/*Ampliacion buscar mayores*/
let buscar_mayores = () => {
    return alumnos.filter(alumno => alumno.esMayor());    
} 
/*Ampliacion cumplir años*/
let cumplir_todos = () => {
    alumnos.map((alumno) => alumno.cumplir());
}

/*Ampliacion eliminar alumno */
let eliminar_alumno = () => {
    let nuevo = [];
    let index = buscar_alumno();
    if (index != -1){
        for (let i=0;i<alumnos.length;i++){
            if (i!=index){
                nuevo.push(alumnos[i]);
            }
        }
        alumnos=nuevo;
    }else{
        console.log("EL ALUNO NO EXISTE");
    }
}

cargar_alumnos();
mostrar_alumnos(alumnos);
console.log("LA MEDIA DE LAS NOTAS ES: "+calcular_media());
//modicar_nota();
//mostrar_alumnos(alumnos);

/*Ampliacion buscar mayores*/
console.log("ALUMNOS MAYORES DE EDAD");
mostrar_alumnos(buscar_mayores());

/*Ampliacion cumplir años*/
console.log("TODOS CUMPLEN AÑOS");
cumplir_todos();
mostrar_alumnos(alumnos);

/*Ampliacion eliminar alumno */
eliminar_alumno();
mostrar_alumnos(alumnos);