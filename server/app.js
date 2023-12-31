const express = require('express');
const cors = require('cors');
const app = express();
const LedRouter = require('./routes/LedRoutes');
const SensorRoutes = require('./routes/SensorRoutes')
require('dotenv').config()

app.use(cors());

app.use('./sensor',SensorRoutes);

app.use('/led',LedRouter);

app.get('/',(req,res)=>{
    res.json({message: "Bem vindo a minha api, para a aula de IOT"})
})
app.listen(3000,()=>{
    console.log("servidor rodando na porta 3000, para acessar use http://localhost:3000")
})