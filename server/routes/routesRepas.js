const express = require('express')
const router = express.Router()

const  { 
    getRepas,
    getRepasOne,
    createRepas,
    updateRepas,
    deleteRepas 
} = require('../controllers/repasControllers')

router.get('/', getRepas)

router.get('/:id', getRepasOne)

router.post('/', createRepas) 

router.put('/:id', updateRepas) 

router.delete('/:id', deleteRepas)

module.exports = router
