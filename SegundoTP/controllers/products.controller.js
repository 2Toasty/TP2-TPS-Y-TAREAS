import services from '../services/products.service.js'

const getProducts = (req, res) =>{
    const products = services.getProducts()
    res.send(products);
}

const getProductsById = (req, res) =>{
    const {id} = req.params 
    const productById = services.getProductsById(id)
    res.send(productById);
}

export default {
    getProducts,
    getProductsById
}