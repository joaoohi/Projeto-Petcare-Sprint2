// PUXA-SE OS MODELS DA EMPRESA (USUÁRIO) E

var empresaModel = require("../models/empresaModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha== undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        empresaModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);

                        res.json({
                            email: resultadoAutenticar[0].email,
                            idEmpresa: resultadoAutenticar[0].idEmpresa

                        });
                       
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function cadastrar(req, res) {
    var razao = req.body.razaoServer;
    var nome = req.body.nomeServer;
    var cnpj = req.body.cnpjServer;
    var cep = req.body.cepServer;
    var telefone_empresa = req.body.telefoneServer;
    var telefone_celular = req.body.celularServer;
    var emailEmpresa = req.body.emailServer;
    var senhaEmpresa = req.body.senhaServer;


    // Validações
    if (razao == undefined) {
        res.status(400).send("Sua razão social está undefined!");
    } else if (nome == undefined) {
        res.status(400).send("Seu Nome Fantasia está undefined!");
    } else if (cnpj == undefined) {
        res.status(400).send("Seu CNPJ está undefined!");
    } else if (cep == undefined) {
        res.status(400).send("Seu CEP está undefined!");
    } else if (telefone_empresa == undefined){
        res.status(400).send("Seu telefone da empresa está undefined!");
    } else if(telefone_celular == undefined){
        res.status(400).send("Seu telefone celular está undefined!");
    } else if(emailEmpresa == undefined){
        res.status(400).send("Seu e-mail da empresa está undefined!");
    } else if(senhaEmpresa == undefined){
        res.status(400).send("Sua senha da empresa está undefined!");
    } 

    empresaModel.cadastrar(
         // `idEmpresa` será gerado automaticamente no banco
        razao, nome, cnpj, cep, telefone_empresa, telefone_celular, emailEmpresa, senhaEmpresa
    )
        .then((resultado) => res.json(resultado))
        .catch((erro) => {
            console.error("\nErro ao realizar cadastro:", erro.sqlMessage || erro);
            res.status(500).json(erro.sqlMessage || "Erro interno no servidor.");
        });
}

module.exports = {
    autenticar,
    cadastrar
};
