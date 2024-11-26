var empresaModel = require("../models/empresaModel");
var cadastroModel = require("../models/cadastroModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        empresaModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);

                        cadastroModel.buscarUsuario(resultadoAutenticar[0].idEmpresa)
                            .then((resultadoEmpresa) => {
                                if (resultadoEmpresa.length > 0) {
                                    res.json({
                                        idEmpresa: resultadoAutenticar[0].idEmpresa,
                                        email: resultadoAutenticar[0].email,
                                        nome: resultadoAutenticar[0].nome,
                                        razao: resultadoAutenticar[0].razao,
                                        cnpj: resultadoAutenticar[0].cnpj,
                                        senha: resultadoAutenticar[0].senha,
                                        cep: resultadoAutenticar[0].cep,
                                        telefone: resultadoAutenticar[0].telefone,
                                        celular:resultadoAutenticar[0].celular,
                                        Empresa: resultadoEmpresa
                                    });
                                } else {
                                    res.status(204).json({ Empresa: [] });
                                }
                            })
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
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var idEmpresa = req.body.idEmpresaServer;
    var email = req.body.emailServer;
    var nome = req.body.nomeServer;
    var razao = req.body.razaoServer;
    var cnpj = req.body.cnpjServer;
    var senha = req.body.senhaServer;
    var cep = req.body.cepServer;
    var telefone = req.body.telefoneServer;
    var celular = req.body.celularServer;

    // Faça as validações dos valores
    if (idEmpresa == undefined) {
        res.status(400).send("Sua empresa está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (nome == undefined) {
        res.status(400).send("Seu Nome Fantasia está undefined!");
    }else if (razao == undefined) {
        res.status(400).send("Sua razao social está undefined!");
     } else if (cnpj == undefined) {
        res.status(400).send("Seu cnpj está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (cep == undefined) {
        res.status(400).send("Seu cep está undefined!");
    } else if (telefone == undefined) {
        res.status(400).send("Seu telefone está undefined!");
    } else if (celular == undefined) {
        res.status(400).send("Seu celular está undefined!");
    } else  {  

        // Passe os valores como parâmetro e vá para o arquivo empresaModel.js
        empresaModel.cadastrar(
            idEmpresa, email, nome, razao, cnpj, senha, cep, telefone, celular
        )
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    autenticar,
    cadastrar
}