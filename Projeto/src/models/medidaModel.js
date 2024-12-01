var database = require("../database/config");
function buscarUltimasMedidasTemperatura(idSensorTemperatura){
    var instrucaoSql = `SELECT 
    sensor_analogico as temperatura, 
                    momento,
                    DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico
                FROM medida
                WHERE fkSensorTemperatura = ${idSensorTemperatura}`;

console.log("Executando a instrução SQL: \n" + instrucaoSql);
return database.executar(instrucaoSql);
}
function buscarUltimasMedidasBloqueio(idSensorTemperatura){

    var instrucaoSql = `SELECT 
        sensor_analogico as temperatura, 
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico, 
                        fkSensorTemperatura
                        FROM medida WHERE fkSensorTemperatura = ${idSensorTemperatura} `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function buscarMedidasEmTempoRealTemperatura(idSensorPresenca){
    var instrucaoSql = `SELECT 
    sensor_digital as presenca, 
                    momento,
                    DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico
                FROM medida
                WHERE fkSensorPresenca = ${idSensorPresenca}`;

console.log("Executando a instrução SQL: \n" + instrucaoSql);
return database.executar(instrucaoSql);
}
function buscarMedidasEmTempoRealPresenca(idSensorPresenca){

    var instrucaoSql = `SELECT 
        dht11_temperatura as temperatura, 
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico, 
                        fkSensorPresenca 
                        FROM medida WHERE fkSensorPresenca = ${idAquario} `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidasTemperatura,
    buscarUltimasMedidasBloqueio,
    buscarMedidasEmTempoRealTemperatura,
    buscarMedidasEmTempoRealPresenca
}
