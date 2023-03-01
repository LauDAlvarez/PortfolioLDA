const mongoose = require('mongoose')
const schema = mongoose.Schema

const schemaProyect = new schema({
    nombre: String,
    email: String,
    telefono: String,
    idUser: String
}) 

const ModeloProyects= mongoose.model('proyectos', schemaProyect);

module.exports = ModeloProyects;