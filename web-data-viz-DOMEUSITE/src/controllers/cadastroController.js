var cadastroModel = require("../models/cadastroModel");


function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        cadastroModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        // res.json(resultadoAutenticar);
                        console.log(resultadoAutenticar);
                                    res.json({
                                        idCadastro: resultadoAutenticar[0].idCadastro,
                                        email: resultadoAutenticar[0].email,
                                        cpf: resultadoAutenticar[0].cpf,
                                        nome: resultadoAutenticar[0].nome,
                                        doacao: resultadoAutenticar[0].doacao,
                                        senha: resultadoAutenticar[0].senha
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
    var nome = req.body.nomeServer;
    var dtNascimento = req.body.dtNascServer;
    var cpf = req.body.cpfServer;
    var doacao = req.body.doacaoServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var confirmacaoSenha = req.body.confirmacaoServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (dtNascimento == undefined) {
        res.status(400).send("Sua data de nascimento está undefined!");
    } else if (cpf == undefined) {
        res.status(400).send("Seu cpf está undefined!");
    } else if (doacao == undefined) {
        res.status(400).send("sua doação está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (confirmacaoSenha == undefined) {
        res.status(400).send("Sua confirmacao de senha a vincular está undefined!");
    }
    else {

        // Passe os valores como parâmetro e vá para o arquivo cadastroModel.js
        cadastroModel.cadastrar(nome, dtNascimento, cpf, doacao, email, senha, confirmacaoSenha)
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