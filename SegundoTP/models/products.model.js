const obtenerProductos = async () => {
    const res = await fetch('https://dummyjson.com/products');
    const datos = await res.json();
    return datos;
}

const getProducts = async () => {
    const products = await obtenerProductos();
    if (products.length === 0) {
        return 'No hay productos en la lista.';
    } else {
        return products;
    }
}

const getProductsById = async (id) => {
    const products = await obtenerProductos();

    if (!Array.isArray(products)) {
        // Manejar el caso en el que products no sea una matriz
        console.error('Error: products no es una matriz');
        return "Error al obtener productos";
    }

    // Buscar manualmente el producto con el ID deseado
    let product = null;
    for (let i = 0; i < products.length; i++) {
        if (products[i].id == id) {
            product = products[i];
            break;
        }
    }

    return product ? product : "Producto inexistente.";
}

export default {
    getProducts,
    getProductsById
};