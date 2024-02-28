class producto{
    constructor(nombre, precio, stock){
        this.nombre=nombre
        this.precio=precio
        this.stock = stock
    }
    total(){
        return this.precio * cantidad

    }
    stock(){
        this.stock -= cantidad
    }

}

class pedido{
    constructor(producto, cantidad){
        this.producto=producto
        this.cantidad=cantidad
        
    }
    productoTotal(){
        return this.producto.precio * this.cantidad;
    }
}

