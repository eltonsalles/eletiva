// Pega a section dos botões
var btn = document.getElementById("botoes");

// Percorre todos os filhos da variável btn (section dos botões)
for (var i = 0; i < btn.children.length; i++) {
	// Adiciona uma função ao evento click dos botões
	document.getElementsByClassName("btn")[i].addEventListener("click", function() {
		// Pega o id do botão que serve para saber em qual categoria o usuário clicou
		var categoria = this.id.split("-")[1];

		// Pega todos os filmes (cada filme está dentro de um article)
		var filmes = document.getElementsByTagName("article");

		// Percorre todos os filmes
		for (var j = 0; j < filmes.length; j++) {
			// Remove a classe filtrar para que apareça todos os filmes antes de filtrar novamente
			filmes[j].classList.remove("filtrar");

			// Se a categoria do botão for todos então não faz mais nada
			if (categoria != "todos") {
				var filtrar = true;

				// Pega todas as categorias do respectivo filme
				var categorias = filmes[j].classList;

				// Percorre as categorias
				for (var k = 0; k < categorias.length; k++) {
					// Se a categoria existir então o filme não deve ser filtrado
					if (categorias[k] == categoria) {
						// Define que filme não deve ser filtrado
						filtrar = false;
						break;
					}
				};

				// Se filtrar ainda for verdadeiro, então o filme não tem a categoria do botão e precisa ser filtrado
				if (filtrar) {
					filmes[j].classList.toggle("filtrar");
				}
			}
		};
	})
};
