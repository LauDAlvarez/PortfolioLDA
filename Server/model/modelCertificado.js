const mongoose = require('mongoose')
const schema = mongoose.Schema

const schemaCertificado = new schema({
    title: String,
    codRef: String,
    reference: String,
    url: String,
    start: String,
    finish: String,
    comentario: String
}) 

const ModeloCertificados= mongoose.model('certificados', schemaCertificado);

module.exports = ModeloCertificados;