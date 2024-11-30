// ESTE ARQUIVO UTILIZA A CONSTANTE EXPRESS, QUE É ATRIBUIDA AO UTILIZAR A FUNÇÃO NATIVA DO NODEJS (REQUIRE) E CHAMA 
// O FRAMEWORK EXPRESS PARA USAR MÉTODOS HTTP, COMO O GET E O POST DESTE TRABALHO. LOGO EM SEGUIDA, TEMOS A ROTA CRIADA DA EMPRESA(USUÁRIO)
// E POR FIM CHAMAMOS A CONSTANTE EMPRESACONTROLLER, QUE SERÁ UTILIZADA TANTO PARA CADASTRO QUANDO PARA AUTENTICAÇÃO/LOGIN;
const express = require("express");
const router = express.Router();
const empresaController = require("../controllers/empresaController");


// AQUI CRIAMOS AS ROTAS PARA CADASTRO E LOGIN.
router.post("/cadastrar", empresaController.cadastrar);
router.post("/autenticar", empresaController.autenticar);

module.exports = router;
