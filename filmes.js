// Pega a section dos botões
var btn = document.getElementById("botoes");

// Percorre todos os filhos da variável btn (section dos botões)
for (var i = 0; i < btn.children.length; i++) {
	// Adiciona uma função ao evento click dos botões
	document.getElementsByClassName("btn")[i].addEventListener("click", function() {
		// Pega o id do botão que serve para saber em qual categoria o usuário clicou
		var categoria = this.id.split("-")[1];

		var body = document.body;

		body.classList.toggle(categoria);
	})
};
