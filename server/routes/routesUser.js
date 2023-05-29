const express = require('express')
const router = express.Router()

const  { 
    getUsers,
    createUser
} = require('../controllers/userController')

router.post('/', createUser)

router.get('/:id_user', getUsers)

module.exports = router
