var database = require("../database/config");
const limite_linhas = 7

function buscarUltimasMedidasTemperatura(fkEmpresaVan){
    var instrucaoSql = ` SELECT v.fkEmpresaVan, mt.sensor_analogico, DATE_FORMAT(mt.momento, '%H:%i:%s') AS momento_grafico
FROM van AS v
JOIN sensorTemperatura ON idVan = fkVanSensor
JOIN medidaTemperatura AS mt ON idSensorTemperatura = fkSensorTemperatura
ORDER BY mt.momento desc
limit 7 `;

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
where sensor_analogico > 26;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarKPI2(fkEmpresaVan){

    var instrucaoSql = `SELECT 
    TIMEDIFF(MAX(momento), MIN(momento)) AS diferenca_tempo
FROM 
    medidaPresenca
WHERE 
    sensor_digital = 1;
`;
    

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// function listarKPI3(fkEmpresaVan){

//     var instrucaoSql = `SELECT 
//     fkSensorTemperatura 
// FROM 
//     MedidaTemperatura
// WHERE 
//     sensor_analogico = 1;
// `;
//     if (sensor_analogico )

//     console.log("Executando a instrução SQL: \n" + instrucaoSql);
//     return database.executar(instrucaoSql);

    
// }



module.exports = {
    buscarUltimasMedidasTemperatura,
    buscarUltimasMedidasBloqueio,
    listarKPI,
    listarKPI2

}
