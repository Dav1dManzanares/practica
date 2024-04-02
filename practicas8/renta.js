class renta{
    constructor(auto,fechadeinicio,fechafinal){
        this.auto=auto;
        this.fechadeinicio=fechadeinicio;
        this.fechafinal=fechafinal;
    }
    obtenerauto() {
        return this.auto;
      }
    
      obtenerfechadeinicio() {
        return this.fechadeinicio;
      }
    
      obtenerfechafinal() {
        return this.fechafinal;
      }
}


export default renta;