class Coche {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
    
    mostrar(){
        console.log(this.marca+" - "+this.modelo);
    }
    modificar(marca, modelo){
        this.marca=marca;
        this.modelo= modelo;
    }
}