let listaDeTeclas = document.querySelectorAll('.tecla');

function tocaSom(idSom) {

    document.querySelector(idSom).play();
}

for(let i = 0; i < listaDeTeclas.length; i++) {

    const teclas = listaDeTeclas[i];

    const instrumento = teclas.classList[1];

    const idSom = `#som_${instrumento}`;

    teclas.onclick = function (evento) {

        tocaSom(idSom);
    }

    teclas.onkeydown = function (evento) {

        if(evento.code == "Space" || evento.code == "Enter") {

            teclas.classList.add("ativa");
        }
    }

    
    teclas.onkeyup = function () {

        teclas.classList.remove("ativa");
    }
}