class empleado {
    constructor(nombre, departamento, salario) {
        this.nombre = nombre;
        this.departamento = departamento;
        this.salario = salario;
    }

    mostrar(){
        console.log(this.nombre+" - "+this.departamento+" - "+this.salario+"€.");
    }
    incremeentar_decrementar (cantidad) {
        this.salario+=cantidad;
    }
}