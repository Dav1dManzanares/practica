class auto{
    constructor(modelo,marca,year){
        this.modelo=modelo;
        this.marca=marca;
        this.year=year;
    } 
    obtenermodelo() {
        return this.modelo;
      }
    
      obtenermarca() {
        return this.marca;
      }
    
      obteneryear() {
        return this.year;
      }
}


export default auto;