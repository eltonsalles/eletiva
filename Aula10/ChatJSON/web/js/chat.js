var listaService;
var listaUsuarios = [];
var divUsuarios ;

function iniciar(){
   divUsuarios = document.querySelector(".usuarios");
   atualizarLista();
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

window.onload = function () {
    setTimeout('location.reload();', 20000);
};

window.addEventListener("load",iniciar);
