var express = require("express");
var router = express.Router();

var doacaoController = require("../controllers/doacaoController");

// router.get("/:empresaId", function (req, res) {
//   aquarioController.buscarAquariosPorEmpresa(req, res);
// });

router.post("/cadastrar", function (req, res) {
  doacaoController.cadastrar(req, res);
})

router.get("/listarProduto", function (req, res) {
  doacaoController.listarProduto(req, res);
});

router.get("/atualizarSabor", function (req, res) {
  doacaoController.atualizarSabor(req, res);
});

router.get("/listar", function (req, res) {
  doacaoController.listar(req, res);
});

// router.get("/pesquisar/:descricao", function (req, res) {
//   avisoController.pesquisarDescricao(req, res);
// });

// router.post("/publicar/:idUsuario", function (req, res) {
//   avisoController.publicar(req, res);
// });

// router.put("/editar/:idAviso", function (req, res) {
//   avisoController.editar(req, res);
// });

// router.delete("/deletar/:idAviso", function (req, res) {
//   avisoController.deletar(req, res);
// });

module.exports = router;