const mongoose = require('mongoose');

const RepasSchema = new mongoose.Schema({
    nom_repas: String,
    tags: Array,
    secteur: String,
})

const Repas = mongoose.model('Repas', RepasSchema)

module.exports = Repas