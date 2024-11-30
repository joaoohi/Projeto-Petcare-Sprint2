// PUXA-SE OS MODELS DA EMPRESA (USUÁRIO) E

var empresaModel = require("../models/empresaModel");
var cadastroModel = require("../models/cadastroModel");

function autenticar(req, res) {
    const email = req.body.emailServer;
    const senha = req.body.senhaServer;

    if (!email) {
        return res.status(400).send("Email é obrigatório.");
    } else if (!senha) {
        return res.status(400).send("Senha é obrigatória.");
    }

    empresaModel.autenticar(email, senha)
        .then((resultadoAutenticar) => {
            console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
            console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`);

            if (resultadoAutenticar.length === 1) {
                empresaModel.autenticar(resultadoAutenticar[0].idEmpresa)
                    .then((resultadoEmpresa) => {
                        if (resultadoEmpresa.length > 0) {
                            res.json({
                                email: resultadoAutenticar[0].email,
                                senha: resultadoAutenticar[0].senha,
                            });
                        } else {
                            res.status(204).json({ Empresa: [] });
                        }
                    });
            } else if (resultadoAutenticar.length === 0) {
                res.status(403).send("Email e/ou senha inválidos.");
            } else {
                res.status(403).send("Mais de um usuário encontrado com as mesmas credenciais!");
            }
        })
        .catch((erro) => {
            console.error("\nErro ao realizar login:", erro.sqlMessage || erro);
            res.status(500).json(erro.sqlMessage || "Erro interno no servidor.");
        });
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
