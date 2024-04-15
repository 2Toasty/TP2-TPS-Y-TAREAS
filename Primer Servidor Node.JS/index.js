import { log } from 'console';
import fs from 'fs';

const bolsa = [2, 10, "go", 4, "c#", 6, "nodejs", true, "java", 9, 1,
"python", 12, "ruby", "php", false]

function filtrarEInformar(array, condicion) {
 
    
    if (!["number", "string", "boolean"].includes(condicion)) {
        return "Error: La condición proporcionada no es válida.";
    }

    //se filtra el array viejo a un array nuevo
    const arrayFiltrado = array.filter(item => typeof item === condicion);

    //se ordena el array nuevo
    arrayFiltrado.sort((a, b) => a - b);

   // se comprueba si el array nuevo tiene elementos
    if (arrayFiltrado.length > 0) {
       
        //para escribir el archivo con un array
        fs.writeFileSync('resultado.txt', arrayFiltrado.join(', '));
        return "El contenido filtrado se ha guardado en resultado.txt";
    } else {
        return "Error: El nuevo array está vacío.";
    }
}

// console.log(filtrarEInformar(bolsa,"number"))
// console.log();
// console.log(filtrarEInformar(bolsa,"string"))
// console.log();
// console.log(filtrarEInformar(bolsa,"boolean"))
// console.log();
console.log(filtrarEInformar(bolsa,""))