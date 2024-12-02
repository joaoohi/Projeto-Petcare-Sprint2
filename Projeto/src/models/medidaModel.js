var database = require("../database/config");


function buscarUltimasMedidasTemperatura(fkEmpresaVan){
    var instrucaoSql = `select fkEmpresaVan, sensor_analogico, DATE_FORMAT(momento,'%H:%i') as momento_grafico
from van join medidaTemperatura where fkEmpresaVan = ${fkEmpresaVan}
ORDER BY sensor_analogico desc limit 1`;

console.log("Executando a instrução SQL: \n" + instrucaoSql);
return database.executar(instrucaoSql);
}



function buscarUltimasMedidasBloqueio(fkEmpresaVan){

    var instrucaoSql = `select fkEmpresaVan, sensor_digital, DATE_FORMAT(momento,'%H:%i') as momento_grafico
from van join medidaPresenca where fkEmpresaVan = ${fkEmpresaVan} 
ORDER BY sensor_digital desc limit 1`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



// function buscarMedidasEmTempoRealTemperatura(idSensorPresenca){
//     var instrucaoSql = `SELECT 
//     sensor_digital as presenca, 
//                     momento,
//                     DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico
//                 FROM medidaTemperatura
//                 WHERE fkSensorPresenca = ${idSensorPresenca}`;

// console.log("Executando a instrução SQL: \n" + instrucaoSql);
// return database.executar(instrucaoSql);
// }
// function buscarMedidasEmTempoRealPresenca(idSensorPresenca){

//     var instrucaoSql = `SELECT 
//         dht11_temperatura as temperatura, 
//                         DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico, 
//                         fkSensorPresenca 
//                         FROM medidaPresenca WHERE fkSensorPresenca = ${idAquario} `;

//     console.log("Executando a instrução SQL: \n" + instrucaoSql);
//     return database.executar(instrucaoSql);
// }

module.exports = {
    buscarUltimasMedidasTemperatura,
    buscarUltimasMedidasBloqueio,
    // buscarMedidasEmTempoRealTemperatura,
    // buscarMedidasEmTempoRealPresenca
}
