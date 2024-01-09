const Product = require('../models/productModels')
const asyncHandler = require('express-async-handler') //para sa paghandle sa async na error

const postProducts = asyncHandler(async(req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)
            
    } catch (error) {
        // console.log(error.message) // --old code sa error message
        res.status(500)
        throw new Error(error.message)
    }
})

const getProducts = asyncHandler(async(req, res) => {
    try {
        const products = await Product.find({})
        res.status(200).json({products, message: "This is all the data from the products"})
    } catch (error) {
        // console.log(error.message) // --old code sa error message
        // res.status(500).json({message: error.message}) // --old code sa error message
        res.status(500)
        throw new Error(error.message)
    }
})

const getProductId = asyncHandler(async(req,res) => {
    try {
        const {id} = req.params
        const product = await Product.findById(id)
        if(!product){
            res.status(404)
            throw new Error(`Cannot find in product with the id of ${id}`)
            // res.status(404).json({message: `Cannot find in product with the id of ${id}`}) // --old code sa error message
        }
        res.status(200).json({product, message: `This is the product with id of "${id}"`})
    } catch (error) {
        // console.log(error.message)
        // res.status(500).json({message: error.message})
        res.status(500)
        throw new Error(error.message)
    }
})

const putProduct = asyncHandler(async(req, res) => {
    try {
        const {id} = req.params
        const product = await Product.findByIdAndUpdate(id, req.body)
        if(product){
            const updateProduct = await Product.findById(id)
            res.status(200).json({updateProduct, message: `The data with the Product Id ${id} Updated Successfully`})
        }else{
            res.status(404)
            throw new Error(`Cannot update because can't find id ${id}`)
            // res.status(404).json({message: `Cannot Updated because can find id ${id}`}) // --old code sa error message
        }
    } catch (error) {
        // console.log(error.message) // --old code sa error message
        // res.status(500).json({message: error.message}) // --old code sa error message
        res.status(500)
        throw new Error(error)
    }
})

const deleteProduct = asyncHandler(async(req, res) => {
    try {
        const {id} = req.params
        const product = await Product.findByIdAndDelete(id)
        if(!product){
            // res.status(404).json({message: `Cannot find the id ${id}`})
            res.status(404)
            throw new Error(`Cannot find the id ${id}`)
        }
        res.status(200).json({product, message: `The product with the id ${id} ${product.name} deleted successfully`})
    } catch (error) {
        // console.log(error.message) // --old code sa error message
        // res.status(500).json({message: error.message}) // --old code sa error message
        res.status(500)
        throw new Error(error.message)
    }
})

module.exports = {
    postProducts,
    getProducts,
    getProductId,
    putProduct,
    deleteProduct
};