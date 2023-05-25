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

router.get('/:clientID', getRepasOne)

router.post('/', createRepas) 

router.put('/:repasID', updateRepas) 

router.delete('/:repasID', deleteRepas)

module.exports = router
