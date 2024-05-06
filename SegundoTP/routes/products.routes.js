import express from 'express'
import controller from '../controllers/products.controller.js'

const router = express.Router()

router.get("/products", controller.getProducts)
router.get("/products/:id", controller.getProductsById)

export default router