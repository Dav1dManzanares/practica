import auto from "./auto.js";
import renta from "./renta.js";

const Auto = new auto('Chevrolet Camaro ss', 'General Motors', 2009);
console.log(Auto.obtenermodelo());

const fechadeinicio = new Date(2024, 3, 1); 
const fechafinal = new Date(2024, 3, 15); 
const Renta = new renta(Auto,fechadeinicio, fechafinal);
console.log(Renta.obtenerauto().obtenermodelo());
