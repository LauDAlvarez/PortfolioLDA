const mongoose = require('mongoose');
mongoose.set('strictQuery', true)

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/PortfolioLautaroAlvarez',{});
}

const objetodb = mongoose.connection

objetodb.on('connected', ()=>{
    console.log('Conexion exitosa a la base de datos')
})
objetodb.on('error', ()=>{
    console.log('Conexion erronea a la base de datos')
})

module.exports = mongoose