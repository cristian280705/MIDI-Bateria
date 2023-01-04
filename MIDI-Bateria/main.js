let listaDeTeclas = document.querySelectorAll('.tecla');//Pega todas as minhas teclas

function tocaSom (idsom) {//Me da um "idsom" de acordo com a tecla clicada, assim tocando o som certo.

    document.querySelector(idsom).play();//toca o som.
}

for(let i = 0; i < listaDeTeclas.length; i++) {//percorre a minha array de teclas

    const teclas = listaDeTeclas[i];
    
    //Pega a primeira classe das teclas, que a parte que falta para o idsom estar correto.
    const instrumento = teclas.classList[1];

    const idSom = `#som_${instrumento}`;//Monta o idsom formatado.

    teclas.onclick = function (evento) {

            tocaSom(idSom);
        }

    teclas.onkeydown = function (evento) {
        //adiciona a funcionalidade de click na tecla da bateria para essas duas teclas.
        if(evento.code === 'Space' || evento.code === 'Enter') {

            teclas.classList.add('ativa');
        }

    }

    teclas.onkeyup = function () {

        teclas.classList.remove('ativa');
    }
}