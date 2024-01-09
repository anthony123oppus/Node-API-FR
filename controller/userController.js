const User = require('../models/userModels')
const asyncHandler = require('express-async-handler')

const postUser = asyncHandler(async(req, res) => {
    try {
        const user = await User.create(req.body)
        res.status(200).json({user, message: `Data ${user.username} Created Successfully`})
    } catch (error) {
        // console.log({message: error.message})
        // res.status(500).json({message: error.message})
        res.status(500)
        throw new Error(error.message)
    }
})

const getUser = asyncHandler(async(req, res) => {
    try {
        const users = await User.find({})
        res.status(200).json({users, message: "This is all data from Users"})
    } catch (error) {
        // console.log(error.message)
        // res.status(500).json({message: error.message})
        res.status(500)
        throw new Error(error.message)
    }
})

const getUserId = asyncHandler(async(req, res) => {
    try {
        const {id} = req.params
        const user = await User.findById(id)
        if(user){
            res.status(200).json({user, message: `This is the data in the user Id ${id}`})
        }else{
            res.status(404)
            throw new Error(`Cannot find the user with the ID ${id}`)
            // res.status(404).json({message: `Cannot find the user with the id of ${id}`}) // --old code sa error message
        }
    } catch (error) {
        // console.log(error.message) // --old code sa error message
        // res.status(500).json({message: error.message}) // --old code sa error message
        res.status(500)
        throw new Error(error.message)
    }
})

const putUserId = asyncHandler(async(req,res) => {
    try {
        const {id} = req.params
        const user = await User.findByIdAndUpdate(id, req.body)
        if(user){
            const updateUser = await User.findById(id)
            res.status(200).json({updateUser, message: `User Id ${id} is updated Successfully`})
        }else{
            res.status(404)
            throw new Error(`Cannot find user with the user Id ${id}`)
            // res.status(404).json({message: `Cannot find user with the user Id ${id}`}) // --old code sa error message
        }
        
    } catch (error) {
        // console.log(error.message) // --old code sa error message
        // res.status(500).json({message: error.message}) // --old code sa error message
        res.status(500)
        throw new Error(error.message)
    }
})

const deleteUser = asyncHandler(async (req, res) => {
    try {
        const {id} = req.params
        const user = await User.findByIdAndDelete(id)
        if(user){
            res.status(200).json({user, message: `user Id ${id} ${user.username} deleted successfully`})
        }else{
            res.status(404)
            throw new Error(`Cannot find user id ${id}`)
            // res.status(404).json({message: `Cannot find user id ${id}`}) // --old code sa error message
        }
    } catch (error) {
        // console.log(error.message) // --old code sa error message
        // res.status(500).json({message: error.message}) // --old code sa error message
        res.status(500)
        throw new Error(error.message)
    }
})


module.exports = {
    postUser,
    getUser,
    getUserId,
    putUserId,
    deleteUser
}

//old code in update
// async(req, res) => {
//     try {
//         const {id} = req.params
//         const user = await User.findByIdAndUpdate(id, req.body)
//         if(user){
//             const updateUser = await User.findById(id)
//             res.status(200).json({updateUser, message: "the user updated successfully"})
//         }else{
//             res.status(404).json({message:`cannot find the id ${id}`})
//         }
//             //pwede sad in aninon ra dili naka mag else pero i else lang nako para masabtan nako ditso
//         // updateUser = await User.findById(id)
//         //     res.status(200).json({updateUser, message: "the user updated successfully"})
//     } catch (error) {
//         console.log(error.message)
//         res.status(500).json({message: error.message})
//     }

// }