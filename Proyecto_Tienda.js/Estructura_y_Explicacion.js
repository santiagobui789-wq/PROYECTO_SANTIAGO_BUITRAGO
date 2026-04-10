// Importa el módulo readline para leer datos desde consola
const readline = require("readline");

// Crea la interfaz de entrada y salida
const rl = readline.createInterface({
    input: process.stdin,   // entrada del teclado
    output: process.stdout  // salida en consola
});

// Arreglo de objetos (productos de la tienda)
const productos = [
 { id: 1, nombre: "Mouse", categoria: "Periférico", precio: 50000, stock: 10, ventas: 12 },
 { id: 2, nombre: "Teclado", categoria: "Periférico", precio: 120000, stock: 5, ventas: 7 },
 { id: 3, nombre: "Monitor", categoria: "Pantalla", precio: 800000, stock: 2, ventas: 4 },
 { id: 4, nombre: "USB", categoria: "Accesorio", precio: 30000, stock: 0, ventas: 15 },
 { id: 5, nombre: "Diadema", categoria: "Audio", precio: 90000, stock: 8, ventas: 6 }
];

// Función principal del menú
function menu() {

    // Muestra las opciones al usuario
    console.log("\n==== MENÚ TIENDA ====");
    console.log("1. Ver todos los productos");
    console.log("2. Filtrar productos con stock");
    console.log("3. Total de ventas");
    console.log("4. Producto más vendido");
    console.log("5. Ordenar por precio");
    console.log("6. Buscar producto por nombre");
    console.log("7. ¿Hay productos sin stock?");
    console.log("8. ¿Todos tienen stock?");
    console.log("0. Salir");

    // Pide una opción al usuario
    rl.question("Seleccione una opción: ", opcion => {

        // Evalúa la opción seleccionada
        switch (opcion) {

            case "1":
                // Recorre todos los productos y los muestra
                productos.forEach(p => console.log(p));
                break;

            case "2":
                // Filtra productos que tienen stock mayor a 0
                console.log(productos.filter(p => p.stock > 0));
                break;

            case "3":
                // Suma todas las ventas usando reduce
                const totalVentas = productos.reduce((acc, p) => acc + p.ventas, 0);
                console.log("Total:", totalVentas);
                break;

            case "4":
                // Busca el producto con mayor número de ventas
                const masVendido = productos.reduce((max, p) =>
                    p.ventas > max.ventas ? p : max
                );
                console.log(masVendido);
                break;

            case "5":
                // Ordena los productos por precio (menor a mayor)
                console.log([...productos].sort((a, b) => a.precio - b.precio));
                break;

            case "6":
                // Pide el nombre del producto a buscar
                rl.question("Ingrese el nombre del producto: ", nombre => {

                    // Busca el producto ignorando mayúsculas/minúsculas
                    const encontrado = productos.find(p =>
                        p.nombre.toLowerCase() === nombre.toLowerCase()
                    );

                    // Muestra el resultado o mensaje si no existe
                    console.log(encontrado || "No encontrado");

                    // Vuelve a mostrar el menú
                    menu();
                });

                return; // Evita que el menú se duplique

            case "7":
                // Verifica si hay al menos un producto sin stock
                console.log("¿Hay productos sin stock?",
                    productos.some(p => p.stock === 0));
                break;

            case "8":
                // Verifica si todos los productos tienen stock
                console.log("¿Todos tienen stock?",
                    productos.every(p => p.stock > 0));
                break;

            case "0":
                // Cierra el programa
                console.log("Saliendo...");
                rl.close();
                return;

            default:
                // Mensaje si la opción no es válida
                console.log("Opción inválida");
        }

        // Vuelve a ejecutar el menú (simula un ciclo while)
        menu();
    });
}

// Ejecuta el programa por primera vez
menu();
