var btn = document.getElementById("botoes");
for (var i = 0; i < btn.children.length; i++) {
	document.getElementsByClassName("btn")[i].addEventListener("click", function() {
		var categoria = this.id.split("-")[1];

		var filmes = document.getElementsByTagName("article");
		for (var j = 0; j < filmes.length; j++) {
			var filtrar = true;

			var categorias = filmes[j].classList;
			for (var k = 0; k < categorias.length; k++) {
				if (categorias[k] == categoria) {
					filtrar = false;
					break;
				}
			};

			if (filtrar) {
				filmes[j].classList.toggle("filtrar");
			}
		};
	})
};