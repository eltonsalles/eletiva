// Adiciona a função validar ao evento click do botão ok
function init() {
    var btn = document.querySelector('button');
    btn.addEventListener('click', validar);
}

// Pega o valor do input e verifica se é uma data válida. Se sim aciona a função addData
function validar() {
    var campo = document.querySelector('input');
    var valor = campo.value;

    if (Date.parse(valor)) {
        addData(valor);
    }
}

// Adiciona uma data
function addData(valor) {
    // Pega o elemento ol que tem o id lista
    var lista = document.getElementById('lista');

    // Cria os elementos que serão adicionados juntos com a data
    var li  = document.createElement('li');
    var b = document.createElement('button');

    // Coloca a data no elemento li e adiciona como filho da lista
    li.textContent = valor;
    lista.appendChild(li);

    // Coloca x no elemento button
    b.textContent = "X";

    // Adiciona um evento ao click do b (elemento button que está sendo criado)
    b.addEventListener('click', function () {
        removerData(li);
    });

    // Adiciona o b (elemento button que está sendo criado) como filho de li
    li.appendChild(b);

    // Percorre a lista para verificar se o valor adicionado já existe e se existir o background fica red
    for (var i = 0; i < lista.childElementCount; i++) {
        var data = lista.children[i].textContent;
        for (var j = 0; j < lista.childElementCount; j++) {
            // i != j para não comparar a mesma posição
            if (i != j && data == lista.children[j].textContent) {
                lista.children[j].style['background'] = 'red';
            }
        }
    }
}

// Função para remover um elemento (no caso li)
function removerData(campo) {
    campo.parentNode.removeChild(campo);
}

// Adiciona a função init no evento load do window
window.addEventListener('load', init);