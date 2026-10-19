let talleres = [];
let cargarArray = () => {
    taller1 = new Taller ("BRADACAUTO", "Peñaranda");
    taller1.cargarCoche(new Coche("Renault", "Laguna"));
    taller1.cargarCoche(new Coche("Renault", "Megane"));
    talleres.push(taller1);
    taller2 = new Taller ("ELECTROCAR", "Cantalapiedra");
    taller2.cargarCoche(new Coche("Seat", "Ibiza"));
    taller2.cargarCoche(new Coche("Seat", "León"));
    talleres.push(taller2);
}

let mostrarArray = () => {
    talleres.map(taller => taller.mostrar());
}
let buscarCoche =(indiceTaller, indiceCoche) => {
    if (talleres[indiceTaller].coches[indiceCoche]){
        return true;
    }
    return false;
}

let buscarTaller = (indice) => {
    if (talleres[indice]){
        return true;
    }
    return false;
}
let modifcarDatosCoche = () =>{
   
    let indiceTaller = Number(prompt("Indica indice de taller"));
    if (buscarTaller(indiceTaller)){
        let indiceCoche = Number(prompt("Indica indice de coche"));
        if(buscarCoche(indiceTaller, indiceCoche)){
            let nuevaMarca = prompt("Indica nueva marca");
            let nuevoModelo = prompt("Indica nuevo modelo");
            talleres[indiceTaller].modificarCoche(indiceCoche, nuevaMarca, nuevoModelo);
            mostrarArray();
        }else{
            console.log("NO EXISTE COCHE");
        }
    }else{
        console.log("NO EXISTE TALLER");
    }
    

}

cargarArray();
mostrarArray();
modifcarDatosCoche();