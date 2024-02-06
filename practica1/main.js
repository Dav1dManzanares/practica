class libros{
    constructor(titulo, autor){
        this.titulo = titulo;
        this.autor = autor;
        this.estado = "disponible"
    }

    verestado(){
        return this.disponible
    }
}

class socio{
    constructor(nombre, id){
        this.nombre = nombre;
        this.id = id;
        this.libros = []
    }
}

