const Repas = require('../models/RepasModels');

const getRepas = ((req, res) => {
    Repas.find({})
        .then(result => res.status(200).json({ result }))
        .catch(error => res.status(500).json({msg: error}))
})

const getRepasOne = ((req, res) => {
    Repas.findOne({ _id: req.params.productID })
        .then(result => res.status(200).json({ result }))
        .catch(() => res.status(404).json({msg: 'Product not found'}))
})

const createRepas = ((req, res) => {
    Repas.create(req.body)
        .then(result => res.status(200).json({ result }))
        .catch((error) => res.status(500).json({msg:  error }))
})

const updateRepas = ((req, res) => {
    Repas.findOneAndUpdate({ _id: req.params.productID }, req.body, { new: true, runValidators: true })
        .then(result => res.status(200).json({ result }))
        .catch((error) => res.status(404).json({msg: 'Product not found' }))
})

const deleteRepas = ((req, res) => {
    Repas.findOneAndDelete({ _id: req.params.productID })
        .then(result => res.status(200).json({ result }))
        .catch((error) => res.status(404).json({msg: 'Product not found' }))
})

module.exports = {
    getRepas,
    getRepasOne,
    createRepas,
    updateRepas,
    deleteRepas
}