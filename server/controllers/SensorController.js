const Sensor = require('../models/sensor');

module.exports = class SensorController{
    static async sensorAtivado(req,res){
        //req(requisição) é um pedido do esp
        //res(resposta) é uma resposta da api
        const {nome,distancia} = req.body;
        //modelo tem S maiusculo
        const sensor = new Sensor({
            nome,distancia
        })
        try{
            await sensor.save();
            res.status(201).json({message:"sensor salvo", sensor: sensor})
        }
        catch(error){
            res.status(201).json({message:"deu ruim"})
        }
    }
}