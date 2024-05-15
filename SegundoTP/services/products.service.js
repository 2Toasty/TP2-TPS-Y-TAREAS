import model from '../models/products.model.js'

const getProducts = async () => {
    const products = await model.getProducts()
    return products
}

const getProductsById = async (id) => {
    const productsById = await model.getProductsById(id)
    return productsById
}

export default {
    getProducts,
    getProductsById
}