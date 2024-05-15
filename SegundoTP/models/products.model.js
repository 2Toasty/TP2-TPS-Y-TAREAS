const obtenerProductos = async () => {
    const res = await fetch('https://dummyjson.com/products');
    const datos = await res.json();
    console.log(datos)
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
    const product = await products.find((product) => product.id == id)

    return product
}

export default {
    getProducts,
    getProductsById
};