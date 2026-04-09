//Evidencia de santiago buitrago goyeneche 3407180 ADSO
console.log ("---TODOS---");
const aprendices = [
 { nombre: "Ana", nota: 4.5, programa: "ADSO" },
 { nombre: "Luis", nota: 2.8, programa: "ADSO" },
 { nombre: "Marta", nota: 3.7, programa: "Diseño Web" },
 { nombre: "Pedro", nota: 1.9, programa: "ADSO" },
 { nombre: "Sofía", nota: 5.0, programa: "Diseño Web" }
];
// Empezamos con las construcion de  los datos basicos que necesitamos para este proyecto y que usaremos para funciones como filter , 
// map , while etc.

console.log (aprendices)  //  Usamos el "console" para mostrar los nombres,notas y programa

//FILTRO DE APROBADO
// En este punto creo un filtro que me permita mostras las notas que superen o sean igual a 3.0 
console.log ("---APROBADOS---");
const aprobados = aprendices.filter( a => a.nota >= 3.0 );
console.log (aprobados);

// FILTRO DE REPROBADOS
// REPETIMOS el anterior comando solo modificando el proceso. Darme las notas menores de 3.0
console.log ("---REPORABADOS---");
const reprobados = aprendices.filter( a => a.nota <=  3.0 );
console.log (reprobados);

//TRASFORMAS LOS NOMBRES EN MAYUSCULAS CON MAP 

console.log ("---MAYUSCULAS---");
const mayusculas = aprendices.map(a => a.nombre.toUpperCase());
console.log(mayusculas); //Creamos una variable llamado mayusculas y 
// usamos el map para trasformar los nombres en mayusculas con un toUpperCase

//CALCULAR PROMEDIO GENERAL CON REDUCE 

console.log ("---PROMEDIO GENERAL---");
const total_notas = aprendices.reduce((acc, nt )=> acc +  nt.nota, 0 );
const promedio = aprendices.reduce((acc, nt )=> acc +  nt.nota, 0 ) / aprendices.length;
console.log (total_notas , "total" ) ;
console.log (promedio , "promedio");
// utilizamos el reduce para sacar el total de las notas sumadas y su promedio 
// creando las variables promedio y total_notas (el total es la suma de todas las notas y el promedio 
// se divide por la cantidad de materias que hay)

//Ordenar por nota de mayor a menor con sort().

console.log ("---MAYOR Y MENOR---");
const notass = aprendices.sort((a , b ) => b.nota - a.nota);
console.log(notass);
// Creamos la variable y despues usamos el sort donde ponemos el a y b como notas mayores y menores



