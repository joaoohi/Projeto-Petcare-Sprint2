var database = require("../database/config");
const limite_linhas = 7

function buscarUltimasMedidasTemperatura(fkEmpresaVan){
    var instrucaoSql = `      select v.fkEmpresaVan, mt.sensor_analogico, DATE_FORMAT(mt.momento,'%H:%i') as momento_grafico
from van as v join sensorTemperatura on idVan = fkVanSensor
join medidaTemperatura as mt on idSensorTemperatura = fkSensorTemperatura
order by mt.momento ASC
;`;

console.log("Executando a instrução SQL: \n" + instrucaoSql);
return database.executar(instrucaoSql);
}



function buscarUltimasMedidasBloqueio(fkEmpresaVan){

    var instrucaoSql = `select v.fkEmpresaVan, g.fkVanGaiola , mp.sensor_digital, DATE_FORMAT(mp.momento,'%H:%i') as momento_grafico
from van as v join gaiola as g on idVan = fkVanGaiola 
join sensorPresenca on idGaiola = fkGaiolaSensorPresenca
join medidaPresenca as mp on idSensorPresenca = fkSensorPresenca 
order by mp.momento DESC
limit 1`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarKPI(fkEmpresaVan){

    var instrucaoSql = `select COUNT(sensor_analogico) as quantidade_alertas from medidaTemperatura
where sensor_analogico > 27;`;

var instrucaoSql2 = `select COUNT(sensor_analogico) as quantidades_alertas from medidaTemperatura
where sensor_analogico > 22;`;

    

    console.log("Executando a instrução SQL: \n" + instrucaoSql, instrucaoSql2);
    return database.executar(instrucaoSql, instrucaoSql2);
}

function listarKPI2(fkEmpresaVan){

    var instrucaoSql = `select COUNT(sensor_analogico) as quantidade_alertas from medidaTemperatura
where sensor_analogico > 27;`;
    

    console.log("Executando a instrução SQL: \n" + instrucaoSql, instrucaoSql2);
    return database.executar(instrucaoSql, instrucaoSql2);
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
    listarKPI,
    listarKPI2
    // buscarMedidasEmTempoRealTemperatura,
    // buscarMedidasEmTempoRealPresenca
}
