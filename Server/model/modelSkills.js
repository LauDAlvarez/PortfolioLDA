const mongoose = require('mongoose')
const schema = mongoose.Schema

const schemaskill = new schema({
    nombre: String,
    conocimiento: String,
    descripcion: String,
    utilidad: String,
    vistos: String
}) 

const ModeloSkills = mongoose.model('skills', schemaskill );

module.exports = ModeloSkills;