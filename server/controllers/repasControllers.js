const Repas = require('../models/RepasModels');

const getRepas = ((req, res) => {
    Repas.find({})
        .then(result => res.status(200).json({ result }))
        .catch(error => res.status(500).json({msg: error}))
})

const getRepasOne = ((req, res) => {
    Repas.find({ id_createur: req.params.clientID })
        .then(result => res.status(200).json({ result }))
        .catch(() => res.status(404).json({msg: 'Product not found'}))
})

const getRepasOneRepas = ((req, res) => {
    Repas.find({ _id: req.params.repasID })
        .then(result => res.status(200).json({ result }))
        .catch(() => res.status(404).json({msg: 'Product not found'}))
})

const createRepas = ((req, res) => {
    Repas.create(
        {
            nom_repas: req.body.nom_repas,
            tags: req.body.tags,
            secteur: req.body.secteur,
            id_createur: req.body.id_createur,
            nom_image: req.body.nom_image,
            // image_data: req.body.image_data,
        }
    )
        .then(result => res.status(200).json({ result }))
        .catch((error) => res.status(500).json({msg:  error }))
})

const updateRepas = ((req, res) => {
    Repas.findOneAndUpdate({ _id: req.params.repasID }, req.body, { new: true, runValidators: true })
        .then(result => res.status(200).json({ result }))
        .catch((error) => res.status(404).json({msg: 'Product not found' }))
})

const deleteRepas = ((req, res) => {
    Repas.findOneAndDelete({ _id: req.params.repasID })
        .then(result => res.status(200).json({ result }))
        .catch((error) => res.status(404).json({msg: 'Product not found' }))
})

module.exports = {
    getRepas,
    getRepasOne,
    getRepasOneRepas,
    createRepas,
    updateRepas,
    deleteRepas
}