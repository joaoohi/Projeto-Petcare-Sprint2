var database = require("../database/config");



function buscarProduto() {
  var instrucaoSql = `Select produto, sabor from doacao`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function atualizarSabor(produto, sabor) {

  var instrucaoSql = `update doacao set  ${empresaId}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrar(qtd_produto, produto, tipo, sabor, ong, fkCadastro) {
  
  var instrucaoSql = `INSERT INTO doacao (qtd_produto, produto, tipo, sabor, ong, fkCadastro) VALUES ('${qtd_produto}', '${produto}','${tipo}','${sabor}','${ong}','${fkCadastro}')`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function listar() {
  var instrucaoSql = `SELECT 
                        SUM(qtd_produto) as qtd_produto, 
                        sabor FROM doacao
                      GROUP BY sabor;`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  buscarProduto,
  atualizarSabor,
  cadastrar,
  listar
}
