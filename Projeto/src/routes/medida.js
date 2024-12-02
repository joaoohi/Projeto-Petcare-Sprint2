var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/temperatura/:idEmpresa", function (req, res) {
    medidaController.buscarUltimasMedidasTemperatura(req, res);
});

// router.get("/temperaturaUltimas/:idEmpresa", function (req, res) {
//     medidaController.buscarMedidasEmTempoRealTemperatura(req, res);
// })

router.get("/presenca/:idEmpresa", function (req, res) {
    medidaController.buscarUltimasMedidasBloqueio(req, res);
});

// router.get("/presencaUltimas/:idEmpresa", function (req, res) {
//     medidaController.buscarMedidasEmTempoRealPresenca(req, res);
// })

module.exports = router;