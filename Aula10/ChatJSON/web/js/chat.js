var listaService;
var listaUsuarios = [];
var divUsuarios ;

var listaConversa;
var listaMensagens = [];
var ta;

function iniciar(){
   divUsuarios = document.querySelector(".usuarios");
   atualizarLista();
   
   ta = document.querySelector(".conversa");
   atualizarConversa();
}

function listar(evt){
    listaUsuarios = JSON.parse(evt.target.responseText);
    listaUsuarios.forEach(u => print(u));
}

function print(usuario){
    var p = document.createElement("p");
    p.textContent = usuario.username;
    divUsuarios.appendChild(p);
    return p;
}

function atualizarLista(){
    listaService = new XMLHttpRequest();
    listaService.open("get", "ListarUsuario");
    listaService.addEventListener("load",listar);
    listaService.send();
}

/******************************************************************************/

function atualizarConversa(){
    listaConversa = new XMLHttpRequest();
    listaConversa.open("get", "ListarConversa");
    listaConversa.addEventListener("load", exibir);
    listaConversa.send();
    
    console.log(listaConversa);
}

function exibir(evt){
    ta.innerHTML = "";
    listaMensagens = JSON.parse(evt.target.responseText);
    listaMensagens.forEach(m => print2(m));
}

function print2(mensagem){
    ta.innerHTML += mensagem.username + ": " + mensagem.texto + "&nbsp;";
    return;
}

window.onload = function () {
    setTimeout('location.reload();', 20000);
};

window.addEventListener("load",iniciar);
