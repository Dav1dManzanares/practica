class Cubo{
    constructor(nombre,textura,nombreImg,dimension){
        this.nombre = nombre;
        this.textura = textura;
        this.nombreImg = nombreImg;
        this.dimension = dimension;
    }
    get NombreImg(){
        return this.nombreImg
    }
}

class CuboTierra extends Cubo{
    constructor(nombre,textura,nombreImg,dimension){
        super(nombre,textura,nombreImg,dimension)
    }
    MostrarCubo(){
        return `El ${this.nombre} de ${this.textura} da 1 de tierra`
    }
}

class CuboDiamante extends Cubo{
    constructor(nombre,textura,nombreImg,dimension){
        super(nombre,textura,nombreImg,dimension)
    }
    MostrarCubo(){
        return `El ${this.nombre} de ${this.textura} da 1 de diamante`
    }
}

class CuboCarbon extends Cubo{
    constructor(nombre,textura,nombreImg,dimension){
        super(nombre,textura,nombreImg,dimension)
    }
    MostrarCubo(){
        return `El ${this.nombre} de ${this.textura} da 1 de carbon`
    }
}

class CuboMadera extends Cubo{
    constructor(nombre,textura,nombreImg,dimension){
        super(nombre,textura,nombreImg,dimension)
    }
    MostrarCubo(){
        return `El ${this.nombre} de ${this.textura} da 1 de madera`
    }
}

const imgCubo = document.getElementById("imgCubo")
const btnCuboTierra = document.getElementById("cuboTierra");
const btncuboDiamante = document.getElementById("cuboDiamante");
const btncuboCarbon = document.getElementById("cuboCarbon");
const btncuboMadera = document.getElementById("cuboMadera");
const respuesta = document.getElementById("response")


btnCuboTierra.addEventListener(`click`,()=>{
    const bloqueTierra = new CuboTierra("Bloque","Tierra","https://static.wikia.nocookie.net/minecraft_gamepedia/images/1/15/Grass_Block_JE4.png",4)
    imgCubo.setAttribute(`src`,bloqueTierra.NombreImg)
    respuesta.innerText = bloqueTierra.MostrarCubo()

})

btncuboDiamante.addEventListener(`click`,()=>{
    const bloqueDiamante = new CuboDiamante("Bloque","Diamante","https://static.wikia.nocookie.net/minecraft_gamepedia/images/c/c8/Block_of_Diamond_JE5_BE3.png",4)
    imgCubo.setAttribute(`src`,bloqueDiamante.NombreImg)
    respuesta.innerText = bloqueDiamante.MostrarCubo()
})

btncuboCarbon.addEventListener(`click`,()=>{
    const bloqueCarbon = new CuboCarbon("Bloque","Carbon","https://minecraft.wiki/images/Block_of_Coal_JE3_BE2.png",4)
    imgCubo.setAttribute(`src`,bloqueCarbon.NombreImg)
    respuesta.innerText = bloqueCarbon.MostrarCubo()
})

btncuboMadera.addEventListener(`click`,()=>{
    const bloqueMadera = new CuboMadera("Bloque","Madera","https://static.wikia.nocookie.net/minecraft_gamepedia/images/c/c1/Oak_Planks.png",4)
    imgCubo.setAttribute(`src`,bloqueMadera.NombreImg)
    respuesta.innerText = bloqueMadera.MostrarCubo()
})