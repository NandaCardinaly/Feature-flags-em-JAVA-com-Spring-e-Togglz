let listaItemExperiencia = document.querySelectorAll(".experiencia__item");
let listaConteudoExperiencia = document.querySelectorAll(".experiencia__conteudo");
var atualAtivo = 0

for(let i = 0; i < listaItemExperiencia.length; i++) {
    listaItemExperiencia[i].addEventListener('click', ativaConteudo)
}

function ativaConteudo(){
    verificaSlideAtual()
    listaItemExperiencia[atualAtivo].classList.remove('experiencia__item-ativo')
    listaConteudoExperiencia[atualAtivo].classList.remove('experiencia__conteudo-ativo')
    this.classList.add('experiencia__item-ativo')
    verificaSlideAtual()
    listaConteudoExperiencia[atualAtivo].classList.add('experiencia__conteudo-ativo')
}

function verificaSlideAtual(){
    for(let i = 0; i < listaItemExperiencia.length; i++){
        if(listaItemExperiencia[i].classList.contains('experiencia__item-ativo')) {
            atualAtivo = i
        }
    }
}