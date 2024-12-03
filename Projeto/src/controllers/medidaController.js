var medidaModel = require("../models/medidaModel");

function buscarUltimasMedidasBloqueio(req,res){
    var idEmpresa = req.params.idEmpresa;

    console.log(`Recuperando as ultimas medidas de presenca`,idEmpresa);

    medidaModel.buscarUltimasMedidasBloqueio(idEmpresa)
    .then( (resultado) => res.status(200).json(resultado))
    .catch( (erro) => {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}



function buscarUltimasMedidasTemperatura(req,res){

    var idEmpresa = req.params.idEmpresa;

    console.log(`Recuperando as ultimas medidas de temperatura`,idEmpresa);

    medidaModel.buscarUltimasMedidasTemperatura(idEmpresa)
    .then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });

}
    
// function buscarMedidasEmTempoRealTemperatura(req,res){

//     console.log(`Recuperando as ultimas medidas de temperatura`,idMedidaTemp);

//     medidaModel.buscarUltimasMedidasTemperatura(idMedidaTemp)
//     .then(function (resultado) {
//         if (resultado.length > 0) {                           
//             console.log(resultado);                           
//             res.status(200).json(resultado);
//         }else{
//             res.status(204).send("Nenhum resultado encontrado")
//         }
//     }).catch(function (erro) {
//         console.log(erro);
//         console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
//         res.status(500).json(erro.sqlMessage);
//     });
// }
   
    

module.exports = {
    buscarUltimasMedidasBloqueio,
    buscarUltimasMedidasTemperatura,
    // buscarMedidasEmTempoRealTemperatura,
}