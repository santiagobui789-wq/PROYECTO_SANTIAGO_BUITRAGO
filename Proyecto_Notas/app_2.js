//Evidencia de santiago buitrago goyeneche 3407180 ADSO

const aprendices = [
 { nombre: "Ana", nota: 4.5, programa: "ADSO" },
 { nombre: "Luis", nota: 2.8, programa: "ADSO" },
 { nombre: "Marta", nota: 3.7, programa: "Diseño Web" },
 { nombre: "Pedro", nota: 1.9, programa: "ADSO" },
 { nombre: "Sofía", nota: 5.0, programa: "Diseño Web" }
];

// 1 - Empezamos con las construcion de  los datos basicos que necesitamos para este proyecto y que usaremos para funciones como filter , 
// map , while etc. 
//  Usamos el "console" para mostrar los nombres,notas y programa

// MENU

const menu = 7;  //<--- PARA NAVEGAR Y BUSCAR SU OPCION DESDE EL 1 HASTA EL 7
switch(menu){
    case 1:  
    console.log ("1---TODO---"); 
    console.log (aprendices) ;break;



    //2-//FILTRO DE APROBADO// En este punto creo un filtro que me permita mostras las notas que superen o sean igual a 3.0 
    case 2: 
    console.log ("2---APROBADOS---");                              
    const aprobados = aprendices.filter( a => a.nota >= 3.0 );
    console.log (aprobados) ;break

    // 3- FILTRO DE REPROBADOS// REPETIMOS el anterior comando solo modificando el proceso. Darme las notas menores de 3.0
    case 3:
    console.log ("3---REPORABADOS---");
    const reprobados = aprendices.filter( a => a.nota <=  3.0 );
    console.log (reprobados);break;

    //4 - TRASFORMAS LOS NOMBRES EN MAYUSCULAS CON MAP //Creamos una variable llamado mayusculas 
    // y // usamos el map para trasformar los nombres en mayusculas con un toUpperCase

    case  4: console.log ("4---MAYUSCULAS---");
    const mayusculas = aprendices.map(a => a.nombre.toUpperCase());
    console.log(mayusculas) ;break
    
    //5- CALCULAR PROMEDIO GENERAL CON REDUCE 
    // utilizamos el reduce para sacar el total de las notas sumadas y su promedio 
    // creando las variables promedio y total_notas (el total es la suma de todas las notas y el promedio 
    // se divide por la cantidad de materias que hay)

    case  5:console.log ("5---PROMEDIO GENERAL---");
    const total_notas = aprendices.reduce((acc, nt )=> acc +  nt.nota, 0 );
    const promedio = aprendices.reduce((acc, nt )=> acc +  nt.nota, 0 ) / aprendices.length;
    console.log (total_notas , "total" ) ;
    console.log (promedio , "promedio") ;break

    //6-Ordenar por nota de mayor a menor con sort().
    // Creamos la variable y despues usamos el sort donde ponemos el a y b como notas mayores y menores

    case  6:console.log ("6---MAYOR Y MENOR---");
    const notass = aprendices.sort((a , b ) => b.nota - a.nota);
    console.log(notass); ;break

    case  7:
        console.log ("7---CLASIFICAR NOTAS---");
            switch(true){

                case (a.nota >= 5.0 ):
                    console.log (a.nombre, "-Superior-")
            }
                
            

    default : console.log("No valido")
}







