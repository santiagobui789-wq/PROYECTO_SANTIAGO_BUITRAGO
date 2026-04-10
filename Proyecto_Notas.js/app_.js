// En este archivo re organizo cada codigo hecho para usar la estructura del 
// while que me permite navegar entre modulos cada algoritmo o funcion hecho por mi
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const aprendices = [
 { nombre: "Ana", nota: 4.5, programa: "ADSO" },
 { nombre: "Luis", nota: 2.8, programa: "ADSO" },
 { nombre: "Marta", nota: 3.7, programa: "Diseño Web" },
 { nombre: "Pedro", nota: 1.9, programa: "ADSO" },
 { nombre: "Sofía", nota: 5.0, programa: "Diseño Web" }
];

function menu() {
    console.log("\n===== MENÚ =====");
    console.log("1. Ver todos");
    console.log("2. Aprobados");
    console.log("3. Reprobados");
    console.log("4. Mayúsculas");
    console.log("5. Promedio");
    console.log("6. Ordenar");
    console.log("7. Clasificar");
    console.log("8. Salir");

    rl.question("Elige una opción: ", opcion => {

        switch (opcion) {

            case "1":
                console.log(aprendices);
                break;

            case "2":
                console.log(aprendices.filter(a => a.nota >= 3));
                break;

            case "3":
                console.log(aprendices.filter(a => a.nota < 3));
                break;

            case "4":
                console.log(aprendices.map(a => a.nombre.toUpperCase()));
                break;

            case "5":
                const total = aprendices.reduce((acc, a) => acc + a.nota, 0);
                console.log("Promedio:", total / aprendices.length);
                break;

            case "6":
                console.log([...aprendices].sort((a, b) => b.nota - a.nota));
                break;

            case "7":
                aprendices.forEach(a => {
                    if (a.nota === 5) console.log(a.nombre, "Superior");
                    else if (a.nota >= 4) console.log(a.nombre, "Alto");
                    else if (a.nota >= 3) console.log(a.nombre, "Básico");
                    else console.log(a.nombre, "Bajo");
                });
                break;

            case "8":
                console.log("Adiós ");
                rl.close();
                return;

            default:
                console.log("Opción inválida");
        }

        menu(); //  vuelve a mostrar el menú
    });
}

menu();