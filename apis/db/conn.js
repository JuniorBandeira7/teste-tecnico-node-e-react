const mongoose = require('mongoose')

async function main(){
    await mongoose.connect('mongodb://mongo:27017/testetecnico')
    console.log('conectado')
}

main().catch((err)=> console.log(err))

module.exports = mongoose