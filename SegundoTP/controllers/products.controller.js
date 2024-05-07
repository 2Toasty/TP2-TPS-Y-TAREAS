import services from '../services/products.service.js'

const getProducts = async (req, res) =>{
    try {
        const products = await services.getProducts();
        res.json(products);
    } catch (error) {
        console.error('Error al obtener productos:', error);
        res.status(500).json({ error: 'Error al obtener productos' });
    }
}

const getProductsById = async (req, res) =>{
    try {
        const id = req.params.id;
        const productById = await services.getProductsById(id);
        res.json(productById);
    } catch (error) {
        console.error('Error al obtener producto por ID:', error);
        res.status(500).json({ error: 'Error al obtener producto por ID' });
    }
}

export default {
    getProducts,
    getProductsById
}