const ModeloCertificados = require('../model/modelCertificado');
const ModeloProyects = require('../model/modelProyects')
const ModeloSkills = require('../model/modelSkills')

const indexController = {
    index: (req, res) =>{
        ModeloCertificados.find({},
                function(docs, err){
                if (!err) {
                    res.send(docs)
                }else{
                    res.send(err)
                }
            });
        ModeloProyects.find({},
            function(docs, err){
                if (!err) {
                    res.send(docs)
                }else{
                    res.send(err)
                }
            });
        ModeloSkills.find({},
            function(docs, err){
                if (!err) {
                    res.send(docs)
                }else{
                    res.send(err)
                }
            });
        },
    certificados: (req, res)=>{
        ModeloCertificados.find({},
            function(docs, err){
            if (!err) {
                res.send(docs)
            }else{
                res.send(err)
            }
        });
        
    },
    conocimiento: (req, res)=>{
        ModeloSkills.find({},
            function(docs, err){
                if (!err) {
                    res.send(docs)
                }else{
                    res.send(err)
                }
            });
    },
    skills:(req, res)=>{
        ModeloSkills.find({},
            function(docs, err){
                if (!err) {
                    res.send(docs)
                }else{
                    res.send(err)
                }
            });
    },
}

module.exports = indexController;