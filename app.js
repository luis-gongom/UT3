console.log("Script cargado");
let alumnos = [];
let mostrar_array = (array) => {
    for (let i=0;i<array.length; i++){
        console.log(array[i]);
    }
}
let media_asignaturas_matriculados = (alumnos) => {
    asiganturas = 0;
    for (let i =0; i<alumnos.length; i++){
        asiganturas+=alumnos[i].asignaturas.length;
    }
    return asiganturas/alumnos.length
}
let cumplir_todos = (alumnos) => {
    /*for (let i=0; i<alumnos.length; i++){
        alumnos[i].cumplir();
    }*/
   return alumnos.map((alumno) => { alumno.cumplir(); return alumno;});
}

let alumno1 = new alumno("Luis", 22);
alumno1.cargar_asignatura("MATES");
alumno1.cargar_asignatura("BIOLOGIA");
alumno1.cargar_asignatura("LENG");
alumnos.push(alumno1);
let alumno2 = new alumno("Ana", 24);
alumno2.cargar_asignatura("FYQ");
alumno2.cargar_asignatura("HIST");
alumno2.mostar_asignaturas();
alumnos.push(alumno2);
mostrar_array(alumnos);
console.log("Los alumnos estan matriculados de media en "+media_asignaturas_matriculados(alumnos)+" asignaturas");
alumnos = cumplir_todos(alumnos);
mostrar_array(alumnos);