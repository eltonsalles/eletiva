var listaService;
var listaUsuarios = [];
var divUsuarios;
var divMensagens;

function iniciar(){
   divUsuarios = document.querySelector(".usuarios");
   divMensagens = document.querySelector(".conversa");
   atualizarLista();
   
   var button = document.querySelector(".enviar");
   button.addEventListener("click", atualizarLista);
}

function listar(evt){
    listaUsuarios = JSON.parse(evt.target.responseText);
    limpar();
    listaUsuarios.forEach(u => print(u));
}

function limpar(){
  while(divUsuarios.childNodes.length > 0){
        divUsuarios.removeChild(divUsuarios.firstChild);
    }  
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

function atualizarMensagens() {
    var texto = document.querySelector(".texto").textContent;
    var mensagem = document.querySelector(".conversa").textContent;
    
    mensagens = new XMLHttpRequest();
    mensagens.open("get", "EnvioMensagem/?texto=" + texto + "&mensagem=" + mensagem);
    mensagens.addEventListener("load", exibir);
    mensagens.send();
}

function exibir(evt){
    exibirMensagem = JSON.parse(evt.target.responseText);
    limpar2();
    exibirMensagem.forEach(m => print2(m));
}

function limpar2(){
  while(divMensagens.childNodes.length > 0){
        divMensagens.removeChild(divMensagens.firstChild);
    }  
}

function print2(mensagem){
    var p = document.createElement("p");
    p.textContent = mensagem.mensagens;
    divMensagens.appendChild(p);
    return p;
}

window.addEventListener("load",iniciar);
