let qtdeJogos = 0;

function contarEExibirJogosAlugados() {
    console.log(`Total de jogos alugados: ${qtdeJogos}!`);
}

function alterarStatus(id) {
    let jogoSelecionado = document.getElementById(`game-${id}`);
    let imagem = jogoSelecionado.querySelector('.dashboard__item__img');
    let botao = jogoSelecionado.querySelector('.dashboard__item__button');
    let nomeJogo = jogoSelecionado.querySelector('.dashboard__item__name');
  
        if(imagem.classList.contains('dashboard__item__img--rented')) {
            if(confirm(`Você tem certeza que deseja devolver o jogo ${nomeJogo.textContent}?`)) {
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = 'Alugar';
            qtdeJogos--;
            }
        } else {
            imagem.classList.add('dashboard__item__img--rented');
            botao.textContent = 'Devolver';
            botao.classList.add('dashboard__item__button--return');
            qtdeJogos++;
        }
        
        contarEExibirJogosAlugados();
    
    // alert(nomeJogo.textContent);
    // alert(botao.textContent);
    // alert(jogoSelecionado.textContent.content);
}

document.addEventListener('DOMContentLoaded', function() {
    qtdeJogos = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarEExibirJogosAlugados();
})

function ordenarNumeros (a, b, c) {
    var numerosOrdenados = [a, b, c].sort((x, y) => x - y);
    console.log(`Números ordenados: ${numerosOrdenados.join(', ')}`);
}

ordenarNumeros(10,4,2);