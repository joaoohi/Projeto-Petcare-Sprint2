var database = require("../database/config")

function autenticar(emailEmpresa, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", emailEmpresa, senha)
    var instrucaoSql = `
        SELECT idEmpresa, nome_fantasia, emailEmpresa, cnpj, FROM empresa WHERE email = '${emailEmpresa}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(razao_social, nome_fantasia, cnpj, cep, telefoneEmpresa, telefoneCelular, emailEmpresa,  senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", razao_social, nome_fantasia, cnpj, cep, telefoneEmpresa, telefoneCelular, emailEmpresa, senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO usuario (razao_social, nome_fantasia, cnpj, cep, telefoneEmpresa, telefoneCelular, emailEmpresa, senha) VALUES ('${razao_social}', '${nome_fantasia}', '${cnpj}', '${cep}', '${telefoneEmpresa}', '${telefoneCelular}', '${emailEmpresa}', '${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    cadastrar
};