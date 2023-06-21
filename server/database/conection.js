const mongoose = require('mongoose')

const usuario = process.env.DB_USER
const senha = process.env.DB_PASS

const connect = ()=> {
    mongoose.connect(`mongodb+srv://${usuario}:${senha}@projeto-iot-gabi.27aqv3s.mongodb.net/teste?retryWrites=true&w=majority`)
    const connection = mongoose.connection;

    connection.on("error",()=>{
        console.log("erro ao conectar com o mongoDB")
    })
    connection.on("open",()=>{
        console.log("conectado com o mongoDB")
    })
}

connect()