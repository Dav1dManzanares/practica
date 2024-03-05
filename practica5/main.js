class CuentaBancaria{
    constructor(Nombre, Saldo, Cuenta){
        this.Nombre=Nombre,
        this.Saldo=Saldo
        this.Cuenta=Cuenta
    }
    Retiro(cantidad){
        if(cantidad>this.saldo){
            return "saldo insuficiente"
        }else{
            return this.saldo=this.saldo-cantidad
        }

    }

    abono(cantidad){
        return this.saldo=this.saldo+cantidad
    }
   
}

const dRetiro=document.getElementById("dRetiro")
const cliente = new CuentaBancaria("david manzanares", 0, "00000-2")
const hAbono=document.getElementById("hAbono")
dRetiro.addEventListener("click", ()=>{
    const cantidad=document.getElementById("cantidad").value
    const response=document.getElementById("respuesta")
////cliente.Retiro(cantidad)

    response.innerText=cliente.Retiro(cantidad)

})

hAbono.addEventListener("click", ()=>{
    const cantidad=parseFloat(document.getElementById("cantidad").value)

    const response=document.getElementById("respuesta")
    response.innerText=cliente.abono(cantidad)
})