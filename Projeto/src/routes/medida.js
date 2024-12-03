var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/temperatura/:idEmpresa", function (req, res) {
    medidaController.buscarUltimasMedidasTemperatura(req, res);
});


router.get("/presenca/:idEmpresa", function (req, res) {
    medidaController.buscarUltimasMedidasBloqueio(req, res);
});


router.get("/listarKPI", function (req, res) {
    medidaController.listarKPI(req, res);
  });
  
router.get("/listarKPI2", function (req, res) {
    medidaController.listarKPI2(req, res);
  });

// router.get("/listarKPI3", function (req, res) {
//     medidaController.listarKPI3(req, res);
//   });
  
  

module.exports = router;