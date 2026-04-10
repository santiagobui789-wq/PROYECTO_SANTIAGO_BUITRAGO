const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const productos = [
 { id: 1, nombre: "Mouse", categoria: "Periférico", precio: 50000, stock: 10, ventas: 12 },
 { id: 2, nombre: "Teclado", categoria: "Periférico", precio: 120000, stock: 5, ventas: 7 },
 { id: 3, nombre: "Monitor", categoria: "Pantalla", precio: 800000, stock: 2, ventas: 4 },
 { id: 4, nombre: "USB", categoria: "Accesorio", precio: 30000, stock: 0, ventas: 15 },
 { id: 5, nombre: "Diadema", categoria: "Audio", precio: 90000, stock: 8, ventas: 6 }
];

function menu() {

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

    rl.question("Seleccione una opción: ", opcion => {

        switch (opcion) {

            case "1":
                console.log("--- TODOS LOS PRODUCTOS ---");
                productos.forEach(p => console.log(p));
                break;

            case "2":
                console.log("--- PRODUCTOS CON STOCK ---");
                console.log(productos.filter(p => p.stock > 0));
                break;

            case "3":
                console.log("--- TOTAL DE VENTAS ---");
                const totalVentas = productos.reduce((acc, p) => acc + p.ventas, 0);
                console.log("Total:", totalVentas);
                break;

            case "4":
                console.log("--- PRODUCTO MÁS VENDIDO ---");
                const masVendido = productos.reduce((max, p) =>
                    p.ventas > max.ventas ? p : max
                );
                console.log(masVendido);
                break;

            case "5":
                console.log("--- ORDENADOS POR PRECIO ---");
                console.log([...productos].sort((a, b) => a.precio - b.precio));
                break;

            case "6":
                rl.question("Ingrese el nombre del producto: ", nombre => {
                    const encontrado = productos.find(p =>
                        p.nombre.toLowerCase() === nombre.toLowerCase()
                    );
                    console.log(encontrado || "No encontrado");
                    menu(); //  volver al menú
                });
                return; //  importante para no duplicar menú

            case "7":
                console.log("¿Hay productos sin stock?",
                    productos.some(p => p.stock === 0));
                break;

            case "8":
                console.log("¿Todos tienen stock?",
                    productos.every(p => p.stock > 0));
                break;

            case "0":
                console.log("Saliendo...");
                rl.close();
                return;

            default:
                console.log("Opción inválida");
        }

        menu(); //  repetir menú
    });
}

menu();