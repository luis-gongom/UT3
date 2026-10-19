let videojuegos = [];
let cargarAlamacen = () => {
    /*let cant = Number(prompt("¿Cuantos videojuegos quieres insertar?"));
    for (let i=0; i<cant; i++){
        let nombre = prompt("Indica nombre: ");
        let genero = prompt("Indica genero: ");
        videojuegos.push(new videojuego(nombre, genero));
    }*/
   videojuegos.push(new videojuego("MGS", "acc"));
   videojuegos.push(new videojuego("GT6", "cars"));
}
let mostrarAlmacen = (array) => {
    for (let i = 0; i<array.length;i++){
        array[i].mostrar();
    }
}
let incrementarHoras = (indice, horas) => {
    if(videojuegos[indice]){
        videojuegos[indice].incrementarHoras(horas);
    }else{
        return false;
    }

}
let mostarPorEncimaLimite = (limite) => {
    return videojuegos.filter(vid => vid.horas > limite);
}

let calcularHorasTotales = () =>{
    return videojuegos.reduce((acc, vid) => acc+vid.horas, 0);
}
let calcularMediaHoras = () => {
    return calcularHorasTotales()/videojuegos.length;
}

let establecerCeroTodos = () => {
    videojuegos.map(vid => vid.establecerCero());
}

cargarAlamacen();
mostrarAlmacen(videojuegos);

let indice = Number(prompt("Indica índice del videojuego a incrementar: "));
let horas = Number(prompt("Indica horas a incremetar: "));
incrementarHoras(indice, horas);

mostrarAlmacen(videojuegos);

let limite = Number(prompt("Indica horas limite: "));
console.log("VIDEOJUEGOS POR ENCIMA LIMITE");
mostrarAlmacen(mostarPorEncimaLimite(limite));
console.log("SE HAN JUGADO "+calcularHorasTotales()+" horas a los juegos y se han jugado una meddia de "+calcularMediaHoras()+" horas de media");
establecerCeroTodos();
console.log("SE HAN ESTABLECIDO LOS JUEGOS A CERO");
mostrarAlmacen(videojuegos);


//Ampliación mostrar con limite 
//mostrarAlmacen(videojuegos.filter(vd => vd.mostarSiHoras(5)));