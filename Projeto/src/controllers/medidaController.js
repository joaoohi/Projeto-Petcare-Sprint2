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
    
   
function listarKPI(req, res) {
    const { fkEmpresaVan } = req.params;
    medidaModel.listarKPI().then((resultado) => {
      if (resultado.length > 0) {
        res.status(200).json(resultado); // Sucesso: retorna quantidade de cones doados
      } else {
        res.status(204).json([]); // Sem conteúdo
      }
    }).catch((erro) => {
      console.error("Houve um erro ao buscar os jogos: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage); // Erro interno
    });
  }

function listarKPI2(req, res) {
    const { fkEmpresaVan } = req.params;
    medidaModel.listarKPI2().then((resultado) => {
      if (resultado.length > 0) {
        res.status(200).json(resultado); // Sucesso: retorna quantidade de cones doados
      } else {
        res.status(204).json([]); // Sem conteúdo
      }
    }).catch((erro) => {
      console.error("Houve um erro ao buscar os jogos: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage); // Erro interno
    });
  }

function listarKPI3(req, res) {
    const { fkEmpresaVan } = req.params;
    medidaModel.listarKPI3().then((resultado) => {
      if (resultado.length > 0) {
        res.status(200).json(resultado); // Sucesso: retorna quantidade de cones doados
      } else {
        res.status(204).json([]); // Sem conteúdo
      }
    }).catch((erro) => {
      console.error("Houve um erro ao buscar os jogos: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage); // Erro interno
    });
  }
    

module.exports = {
    buscarUltimasMedidasBloqueio,
    buscarUltimasMedidasTemperatura,
    listarKPI,
    listarKPI2,
    // listarKPI3
}