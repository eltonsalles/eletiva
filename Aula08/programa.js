// Guarda a lista do dados.json
let lista = [];

// Faz a requisição dos dados
let init = (e) => {
    // Requisicao por XHR
    let xhr = new XMLHttpRequest();
    xhr.open("get", "dados.json");
    xhr.addEventListener("load", carregarTabela);
    xhr.send();
};

// Carrega os dados da tabela e chama as configurações
let carregarTabela = (e) => {
    let result = e.target.response;
    lista = JSON.parse(result);
    imprimir(lista);

    configurarOrdenacao();
    configurarFiltro()
};

// Imprime os dados na tabela
let imprimir = (lista) => {
    let tabela = document.querySelector("#listagem tbody");

    lista.forEach(function (obj) {
        let tr = document.createElement("tr");

        for (let prop in obj) {
            let td = document.createElement("td");
            td.innerText = obj[prop];

            tr.appendChild(td);
        }

        tabela.appendChild(tr);
    });
};

// Limpa a tabela
let limparTabela = () => {
    let tabela = document.querySelector("#listagem tbody");
    let trs = document.querySelectorAll("#listagem tbody tr");

    trs.forEach(function (tr) {
        tabela.removeChild(tr);
    });
};

// Filtro
let configurarFiltro = () => {
    let inputs = document.querySelectorAll("input");

    inputs[0].addEventListener("keyup", function () {
        limparTabela();
        imprimir(lista.filter(filtrarIdade));
    });

    inputs[1].addEventListener("keyup", function () {
        limparTabela();
        imprimir(lista.filter(filtrarNome));
    });

    inputs[2].addEventListener("keyup", function () {
        limparTabela();
        imprimir(lista.filter(filtrarProfissao));
    });

    inputs[3].addEventListener("keyup", function () {
        limparTabela();
        imprimir(lista.filter(filtrarInstituicao));
    });
};

let filtrarIdade = (obj) => {
    let input = document.querySelector("#idade").value;
    return obj.idade == input;
};

let filtrarNome = (obj) => {
    let input = document.querySelector("#nome").value;
    return obj.nome.toUpperCase() == input.toUpperCase();
};

let filtrarProfissao = (obj) => {
    let input = document.querySelector("#profissao").value;
    return obj.profissao.toUpperCase() == input.toUpperCase();
};

let filtrarInstituicao = (obj) => {
    let input = document.querySelector("#instituicao").value;
    return obj.instituicao.toUpperCase() == input.toUpperCase();
};

// Ordenação
let configurarOrdenacao = () => {
    let ths = document.querySelectorAll("#listagem thead th");

    ths[0].addEventListener("click", function () {
        limparTabela();
        lista.sort(ordenarIdade);
        imprimir(lista);
    });

    ths[1].addEventListener("click", function () {
        limparTabela();
        lista.sort(ordenarNome);
        imprimir(lista);
    });

    ths[2].addEventListener("click", function () {
        limparTabela();
        lista.sort(ordenarProfissao);
        imprimir(lista);
    });

    ths[3].addEventListener("click", function () {
        limparTabela();
        lista.sort(ordenarInstituicao);
        imprimir(lista);
    });
};

let ordenarIdade = (a, b) => {
    if (a.idade < b.idade) {
        return -1;
    }

    if (a.idade > b.idade) {
        return 1;
    }

    return 0;
};

let ordenarNome = (a, b) => {
    if (a.nome < b.nome) {
        return -1;
    }

    if (a.nome > b.nome) {
        return 1;
    }

    return 0;
};

let ordenarProfissao = (a, b) => {
    if (a.profissao < b.profissao) {
        return -1;
    }

    if (a.profissao > b.profissao) {
        return 1;
    }

    return 0;
};

let ordenarInstituicao = (a, b) => {
    if (a.instituicao < b.instituicao) {
        return -1;
    }

    if (a.instituicao > b.instituicao) {
        return 1;
    }

    return 0;
};

window.addEventListener("load", init);

/*
 MAP - cria um vetor a partir de outro vetor
 REDUCE - cria um único valor a partir de um vetor
 FOREACH - percorre o vetor
 JOIN - transforma o vetor em uma string (inverso é SPLIT)
 EVERY - se todo o vetor cumpre uma condição
 SOME - se alguém cumpre uma condição
 FILTER - retorna um vetor com apenas os valores que cumpram a condição
 SORT - ordena o vetor de acordo com a função
 REVERSE - retorna o vetor na ordem reversa
 */