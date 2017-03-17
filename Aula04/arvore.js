function Pessoa(nome, sobrenome, idade){
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
  this.filhos = [];
  this.crescer = function(){
    return ++this.idade;
  }
}

var joao = new Pessoa("João", "Patati", 98);
var ze = new Pessoa("Zé", "Patati", 60);
var clodoaldo = new Pessoa("Clodoaldo", "Patati", 63);
var julia = new Pessoa("Júlia", "Patati", 40);
var maria = new Pessoa("Maria", "Patati", 36);
var chico = new Pessoa("Chico", "Patati", 10);

joao.filhos.push(ze);
joao.filhos.push(clodoaldo);
clodoaldo.filhos.push(julia);
clodoaldo.filhos.push(maria);
maria.filhos.push(chico);

var familia = [joao, ze, clodoaldo, julia, maria, chico];

function imprimir(pessoa){
  //nome, sobrenome, idade, qtdade de filhos
  var article = document.createElement("article");
  article.classList.add("pessoa");
  article.textContent = "Nome: " + pessoa.nome + " " + pessoa.sobrenome + ", Idade: " + pessoa.idade + ", Qtde. de filhos: " + pessoa.filhos.length;
  document.body.appendChild(article);
}

for (var i = 0; i < familia.length; i++) {
  imprimir(familia[i]);
}