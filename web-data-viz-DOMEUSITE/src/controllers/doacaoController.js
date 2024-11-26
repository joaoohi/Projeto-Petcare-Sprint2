var doacaoModel = require("../models/doacaoModel");

function buscarProduto(req, res) {
  var idCadastro = req.params.idCadastro;

  doacaoModel.buscarProduto(idCadastro).then((resultado) => {
    if (resultado.length > 0) {
      res.status(200).json(resultado);
    } else {
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar os produtos: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}


function cadastrar(req, res) {
  var quantidade = req.body.quantidadeServer
  var produto = req.body.produtoServer
  var cor = req.body.corServer
  var sabor = req.body.saborServer
  var ong = req.body.ongServer
  var fkCadastro = req.body.fkCadastroServer

  if (quantidade == undefined) {
    res.status(400).send("Quantidade está undefined!");
  } else if (produto == undefined) {
    res.status(400).send("Produto está undefined!");
  } else if (cor == undefined) {
    res.status(400).send("Cor está undefined!");
  } else if (sabor == undefined) {
    res.status(400).send("Sabor está undefined!");
  } else if (ong == undefined) {
    res.status(400).send("Ong está undefined!");
  } else if (fkCadastro == undefined) {
    res.status(400).send("fkCadastro está undefined!");
  } else {


    doacaoModel.cadastrar(quantidade, produto, cor, sabor, ong, fkCadastro)
      .then((resultado) => {
        res.status(201).json(resultado);
      }
      ).catch((erro) => {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o cadastro! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

function listar(req, res) {
  doacaoModel.listar().then((resultado) => {
    if (resultado.length > 0) {
      res.status(200).json(resultado); // Sucesso: retorna a lista de jogos
    } else {
      res.status(204).json([]); // Sem conteúdo
    }
  }).catch((erro) => {
    console.error("Houve um erro ao buscar os jogos: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage); // Erro interno
  });
}

module.exports = {
  buscarProduto,
  cadastrar,
  listar
}