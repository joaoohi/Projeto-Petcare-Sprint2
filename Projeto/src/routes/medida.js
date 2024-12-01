var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:idEmpresa", function (req, res) {
    medidaController.buscarUltimasMedidasTemperatura(req, res);
});

router.get("/tempultimaso-real/:idEmpresa", function (req, res) {
    medidaController.buscarMedidasEmTempoRealTemperatura(req, res);
})

router.get("/ultimas/:idEmpresa", function (req, res) {
    medidaController.buscarUltimasMedidasPresenca(req, res);
});

router.get("/tempultimaso-real/:idEmpresa", function (req, res) {
    medidaController.buscarMedidasEmTempoRealPresenca(req, res);
})

module.exports = router;