const mongoose = require('mongoose');

const RepasSchema = new mongoose.Schema({
    nom_repas: String,
    tags: Array,
    secteur: String,
    id_createur: String,
    nom_image: String,
    // image_data: Buffer
})

const Repas = mongoose.model('Repas', RepasSchema)

module.exports = Repas