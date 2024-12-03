var alertas = [];

function obterdados() {
    var idEmpresa = sessionStorage.ID_USUARIO
    fetch(`/medida/presenca/${idEmpresa}`)
        .then(resposta => {
            if (resposta.status == 200) {
                resposta.json().then(resposta => {

                    console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

                    alertar(resposta, idEmpresa);
                });
            } else {
                console.error(`Nenhum dado encontrado para o id ${idEmpresa} ou erro na API`);
            }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados do aquario p/ gráfico: ${error.message}`);
        });

}

function alertar(resposta, fkEmpresa) {
    var temp = resposta[0].temperatura;

    var grauDeAviso = '';

    var limites = {
        muito_quente: 26,
        quente: 24,
        ideal: 22,
        frio: 20,
        muito_frio: 18
    };

    var classe_temperatura = 'cor-alerta';

    if (temp >= limites.muito_quente) {
        classe_temperatura = 'cor-alerta perigo-quente';
        grauDeAviso = 'perigo quente'
        grauDeAvisoCor = 'cor-alerta perigo-quente'
        exibirAlerta(temp, fkEmpresa, grauDeAviso, grauDeAvisoCor)
    }
    else if (temp < limites.muito_quente && temp >= limites.quente) {
        classe_temperatura = 'cor-alerta alerta-quente';
        grauDeAviso = 'alerta quente'
        grauDeAvisoCor = 'cor-alerta alerta-quente'
        exibirAlerta(temp, fkEmpresa, grauDeAviso, grauDeAvisoCor)
    }
    else if (temp < limites.quente && temp > limites.frio) {
        classe_temperatura = 'cor-alerta ideal';
        removerAlerta(fkEmpresa);
    }
    else if (temp <= limites.frio && temp > limites.muito_frio) {
        classe_temperatura = 'cor-alerta alerta-frio';
        grauDeAviso = 'alerta frio'
        grauDeAvisoCor = 'cor-alerta alerta-frio'
        exibirAlerta(temp, fkEmpresa, grauDeAviso, grauDeAvisoCor)
    }
    else if (temp <= limites.muito_frio) {
        classe_temperatura = 'cor-alerta perigo-frio';
        grauDeAviso = 'perigo frio'
        grauDeAvisoCor = 'cor-alerta perigo-frio'
        exibirAlerta(temp, fkEmpresa, grauDeAviso, grauDeAvisoCor)
    }

    var card;

    if (document.getElementById(`sensor_analogico ${fkEmpresa}`) != null) {
        document.getElementById(`sensor_analogico ${fkEmpresa}`).innerHTML = temp + "°C";
    }

    if (document.getElementById(`card_${fkEmpresa}`)) {
        card = document.getElementById(`card_${fkEmpresa}`)
        card.className = classe_temperatura;
    }
}

function exibirAlerta(temp, fkEmpresa, grauDeAviso, grauDeAvisoCor) {
    var indice = alertas.findIndex(item => item.fkEmpresa == fkEmpresa);

    if (indice >= 0) {
        alertas[indice] = { fkEmpresa, temp, grauDeAviso, grauDeAvisoCor }
    } else {
        alertas.push({ fkEmpresa, temp, grauDeAviso, grauDeAvisoCor });
    }

    exibirCards();
}

function removerAlerta(fkEmpresa) {
    alertas = alertas.filter(item => item.fkEmpresa != fkEmpresa);
    exibirCards();
}

function exibirCards() {
    alerta.innerHTML = '';

    for (var i = 0; i < alertas.length; i++) {
        var mensagem = alertas[i];
        alerta.innerHTML += transformarEmDiv(mensagem);
    }
}

function transformarEmDiv({ fkEmpresa, temp, grauDeAviso, grauDeAvisoCor }) {

    var descricao = JSON.parse(sessionStorage.AQUARIOS).find(item => item.id == fkEmpresa).descricao;
    return `
    <div class="mensagem-alarme">
        <div class="informacao">
            <div class="${grauDeAvisoCor}">&#12644;</div> 
            <h3>${descricao} está em estado de ${grauDeAviso}!</h3>
            <small>Temperatura capturada: ${temp}°C.</small>   
        </div>
        <div class="alarme-sino"></div>
    </div>
    `;
}

function atualizacaoPeriodica() {
    JSON.parse(sessionStorage.ID_USUARIO).forEach(item => {
        obterdados(item.id)
    });
    setTimeout(atualizacaoPeriodica, 5000);
}
