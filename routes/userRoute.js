const express = require('express')
const User = require('../models/userModels')
const {postUser, getUser, getUserId, putUserId, deleteUser} = require('../controller/userController')

const router = express.Router();

// routes in saving data in user in mongodb
router.post('/', postUser)

//routes in getting or fetch data in user in mongodb
router.get('/', getUser)
 
//routes in getting or fetch data in one id in user
router.get('/:id', getUserId)

//update the data in user in mongodb
router.put('/:id', putUserId)

//delete in user in mongodb
router.delete('/:id', deleteUser)

module.exports = router;