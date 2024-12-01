var medidaModel = require("../models/medidaModel");
    
function buscarUltimasMedidasTemperatura(req,res){

    var idMedidaTemp = req.params.idMedidaTemp;

    console.log(`Recuperando as ultimas medidas de temperatura`,idMedidaTemp);

    medidaModel.buscarUltimasMedidasTemperatura(idMedidaTemp)
    .then(function (resultado) {
        res.status(200).send('Medida capturada com sucesso!');
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });

}
    
function buscarMedidasEmTempoRealTemperatura(req,res){

    console.log(`Recuperando as ultimas medidas de temperatura`,idMedidaTemp);

    medidaModel.buscarUltimasMedidasTemperatura(idMedidaTemp)
    .then(function (resultado) {
        if (resultado.length > 0) {                           
            console.log(resultado);                           
            res.status(200).json(resultado);
        }else{
            res.status(204).send("Nenhum resultado encontrado")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}
   
function buscarUltimasMedidasPresenca(req,res){
    var idMedidaPre = req.params.idMedidaPre;

    console.log(`Recuperando as ultimas medidas de temperatura`,idMedidaPre);

    medidaModel.buscarUltimasMedidasPresenca(idMedidaPre)
    .then(function (resultado) {
        res.status(200).send('Medida capturada com sucesso!');
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });



}
    
function buscarUltimasMedidasPresenca(req,res){

    console.log(`Recuperando as ultimas medidas de temperatura`,idMedidaPre);

    medidaModel.buscarUltimasMedidasPresenca(idMedidaPre)
    .then(function (resultado) {
        if (resultado.length > 0) {                           
            console.log(resultado);                           
            res.status(200).json(resultado);
        }else{
            res.status(204).send("Nenhum resultado encontrado")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });

}

module.exports = {
    buscarUltimasMedidasTemperatura,
    buscarMedidasEmTempoRealTemperatura,
    buscarUltimasMedidasTemperatura,
    buscarUltimasMedidasPresenca
}