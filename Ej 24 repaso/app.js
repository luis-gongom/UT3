let empleados = [];

let cargar_empleados = () => {
    empleados.push(new empleado("Andres", "RR.HH", 4000));
    empleados.push(new empleado("Paco", "TIC", 6000));
    empleados.push(new empleado("Ana", "RR.HH", 4500));
    empleados.push(new empleado("Tomas", "TIC", 5200));
    empleados.push(new empleado("Jeronimo", "SyT", 3000));
}

let mostrar_empleados = (empleados) => {
    for (let i =0; i<empleados.length;i++){
        empleados[i].mostrar();
    }
}

//buscar por departamento clasico
let buscar_departamento_clasico = (departamento) => {
    let encontrados = [];
    for (let i =0; i< empleados.length; i++){
        if (empleados[i].departamento == departamento){
            encontrados.push(empleados[i]);
        }
    }
    return encontrados;
}

//buscar por departamento filter
let buscar_departamento_filter = (departamento) => {
    return empleados.filter(emp => emp.departamento == departamento)
}


//empleados con salario superior a cantidad clasico
let empleados_mayores_que_clasico = (cantidad) => {
    let encontrados = [];
    for (let i =0; i< empleados.length; i++){
        if (empleados[i].salario > cantidad){
            encontrados.push(empleados[i]);
        }
    }
    return encontrados;

}

//empleados con salario superior a cantidad filter
let empleados_mayores_que_filter = (cantidad) => {
    return empleados.filter(emp => emp.salario > cantidad);
}

//salario medio clasico
let salario_medio_clasico = () => {
    let media = 0;
    for (let i =0; i< empleados.length; i++){
        media+=empleados[i].salario;
    }
    media = media/empleados.length;
    return media;
}

//salario medio reduce
let salario_medio_reduce = () => {
    return empleados.reduce((acc, emp)=> acc+emp.salario, 0)/empleados.length;
}


//empleado con mayor salario clasico
let empleado_mayor_salario_clasico = () => {
    let mayor = empleados[0];
    for (let i =0; i< empleados.length; i++){
        if(empleados[i].salario > mayor.salario){
            mayor = empleados[i];
        }
    }
    return mayor;
}

//empleado con mayor salario reduce
let empleado_mayor_salario_reduce = () => {
    return empleados.reduce((acc, emp) => acc.salario > emp.salario ? acc : emp);
}

//array de nombres clasico
let obtener_nombres_clasico = () => {
    let nombres =  []
    for (let i =0; i< empleados.length; i++){
        nombres.push(empleados[i].nombre)
    }
    return nombres;
}

//array de nombres map
let obtener_nombres_map = () => {
    return empleados.map(emp => emp.nombre);
}

cargar_empleados();
//mostrar_empleados(empleados);
//mostrar_empleados(buscar_departamento_clasico("TIC"));
//mostrar_empleados(buscar_departamento_filter("RR.HH"));
//mostrar_empleados(empleados_mayores_que_clasico(5000));
//mostrar_empleados(empleados_mayores_que_filter(5500));
//console.log("El salario medio es: "+salario_medio_clasico());
//console.log("El salario medio es: "+salario_medio_reduce());
//console.log("Empleado mayor salario: ");
//console.log(empleado_mayor_salario_clasico());
//console.log(empleado_mayor_salario_reduce());
//console.log("LOS NOMBRES SOLO: ");
//console.log(obtener_nombres_clasico());
//console.log(obtener_nombres_map());


//Ampliacion incremetar/decrementar salario a usuario

let buscar = (nombre) => {
    for (let i =0; i< empleados.length; i++){
        if(empleados[i].nombre == nombre){
            return empleados[i];
        }
    }
}

let buscar_incrementar = () => {
    let nombre = prompt("Indica nombre de empleado a subir ");
    let cantidad = Number(prompt("Indica cantidad a modificar salario: "));
    let emp=buscar(nombre);
    emp.incremeentar_decrementar(cantidad);
}

buscar_incrementar();
mostrar_empleados(empleados);