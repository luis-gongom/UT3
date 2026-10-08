console.log("Script cargado");

let mostrar_array = (array) => {
    for (let i=0;i<array.length;i++){
            console.log(array[i]);
    }
    console.log("FIN ARRAY");
}

let crearArray = (num) =>{
    let array = [];
    for (let i=0;i<num;i++){
        array[i]=Number(prompt("Indica el numero "+(i+1)+" de "+num));
    }
    return array;
}
let invertir = (array) => {
    let inverso = [];
    for (let i=array.length-1; i>=0; i--){
        inverso.push(array[i]);
    }
    return inverso;
}
let buscar_mayores = (array, valor) => {
    let mayores = [];
    for (let i =0; i<array.length; i++){
        if (array[i]>valor){
            mayores.push(array[i]);
        }
    }
    return mayores;
}
let buscar_valor = (array, valor) =>{
    for (let i = 0; i<array.length; i++){
        if (array[i]==valor)
            return true;
    }
    return false;
}
let max_min = (array) => {
    let max = array[0];
    let min = array [0];
    for (let i = 0; i < array.length; i++){
        if (array[i]>max){
            max = array[i];
        }
        if( array[i]< min){
            min =array[i]
        }
    }
    return [max, min];
}

let EsPrimo = (num) => {
    if (num == 1)
        return false;
    if (num == 2)
        return true;
    for (let i = 2; i<num; i++){
        if (num%i ==0)
            return false;
    }
    return true;
}

let num = Number(prompt("¿Cuantos números quieres insertar en el array?"));
let numeros = crearArray(num);
console.log("VOY A MOSTRAR EL ARRAY");
mostrar_array(numeros);

console.log("VOY A MOSTRAR EL ARRAY INVERSO");
mostrar_array(invertir(numeros));

let mult = numeros.reduce ((acc, n) => n*acc, 1);
console.log("El multplicador de los numeros es: "+mult);

let mult7 = numeros.filter(n => n%7==0);
console.log("VOY A MOSTRAR EL ARRAY DE LOS MULTIPLOS DE 7");
mostrar_array(mult7);

let valor = Number(prompt("Indica valor mayor que:"));
console.log("VOY A MOSTRAR EL ARRAY DE LOS MAYORES DE "+valor);
//let mayores = numeros.filter(n => n>valor);
mostrar_array(buscar_mayores(numeros, valor));

let triples = numeros.map(n => n*3);
console.log("VOY A MOSTRAR EL ARRAY DE LOS TRIPLES");
mostrar_array(triples);

let buscado = Number(prompt("Insetar el valor buscado"));
/*if (buscar_valor(numeros, buscado)){
    console.log("EL VALOR "+buscado+" SI ESTA")
}else{
    console.log("EL VALOR "+buscado+" NO ESTA")
}*/
if (numeros.filter(n => n==buscado).length >=1 ){
    console.log("EL VALOR "+buscado+" SI ESTA")
}else{
    console.log("EL VALOR "+buscado+" NO ESTA")
}

let maxmin= max_min(numeros)
console.log ("EL MAX ES "+maxmin[0]+" Y EL MINIMO ES EN "+maxmin[1]);

let primos = numeros.filter(n => EsPrimo(n));
console.log("VOY A MOSTRAR EL ARRAY DE LOS PRIMOS");
mostrar_array(primos);

console.log("Script finalizado");