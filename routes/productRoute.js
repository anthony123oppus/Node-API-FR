const express = require('express')
const Product = require('../models/productModels')
const {postProducts, getProducts, getProductId, putProduct, deleteProduct} = require('../controller/productController')

const router = express.Router();

//routes in saving data in mongodb
router.post('/product', postProducts)

 //route in getting all the data in product in mongodb
 router.get('/products', getProducts) 

 //route in getting the data or fetching the data with one id 
 router.get('/product/:id', getProductId)

 //routes in product update in mondodb
 router.put('/product/:id', putProduct)

 //routes in deleting data in product
 router.delete('/product/:id', deleteProduct)

 module.exports = router;
 