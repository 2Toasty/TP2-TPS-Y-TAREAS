import model from '../models/products.model.js'

const getProducts = () => {
    const products = model.getProducts()
    return products
}

const getProductsById = (id) => {
    const productsById = model.getProductsById(id)
    return productsById
}

export default {
    getProducts,
    getProductsById
}