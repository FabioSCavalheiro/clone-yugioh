/*
OBJETIVO 1 - quando clicarmos na seta de avançar temos que mostrar o proximo 
cartao da lista
  - passo 1 - dar um jeito de pegar o elemento HTML da seta avancar
  - passo 2 - dar um jeito de identificar o clique do usuário na seta avançar
     - passo 3 - fazer aparecer o próximo cartão da lista 
    - passo 4 - buscar o cartão que esta selecionado e esconder


*/

//passo 1 - dar um jeito de pegar o elemento HTML da seta avancar
const btnAvancar = document.getElementById("btn-avancar")
//querySelectorAll busca todos da lista enquanto o querySelector busca apenas 1
const cartoes = document.querySelectorAll(".cartao");
//o primeiro cartao, para aparecer primerio \/
let cartaoAtual = 0;

//console.log(EX) = para aparecer no console do navegador - para ver os objetos e classes do produto htlm que está mechendo

//ultima live
//forEach serve para passar por cada item da lista eventListener é para 1 unico item 
cartoes.forEach((cartao) => {
  cartao.addEventListener("click", function () {
    const cartaVirada = cartao.querySelector(".carta-virada")

    //virar o cartão 
    cartao.classList.toggle("virar");
    //mostrar o fundo da carta
    cartaVirada.classList.toggle("mostrar-fundo-carta");

    const descricao = cartao.querySelector(".descricao");
    descricao.classList.toggle("esconder");

  });
});

//passo 2 - dar um jeito de identificar o clique do usuário na seta avançar

btnAvancar.addEventListener("click", function () {
  //são 7 cartões mas a contagem inicial no zero, então precisa por -1 para o codigo ler do 0 ao 6 não do 0 ao 7 (return - faz o código parar)
  if (cartaoAtual === cartoes.length - 1) return;
  //passo 4 - buscar o cartão que esta selecionado e esconder
  //cada palavra nova a letra é maiuscula \/ - lembrar do . na classe 
  const cartaoSelecionado = document.querySelector(".selecionado");
  cartaoSelecionado.classList.remove("selecionado");

  // passo 3 - fazer aparecer o próximo cartão da lista 
  //função para deixar alterar o cartao principal e ofuscar o resto\/ alterando a classe selecionado do 1 para o 2 e assim em diante
  //++ para subir/incrementar/proximo
  cartaoAtual++;
  //esse classlist dará erro, pois não existe cartoes além do setimo
  cartoes[cartaoAtual].classList.add("selecionado");
});

/*
OBJETIVO 2 - quando clicarmos na seta de voltar temos que mostrar o cartão 
anterior da lista
  - passo 1 - dar um jeito de pegar o elemento HTML da seta voltar
  - passo 2 - dar um jeito de identificar o clique do usuário na seta voltar
  - passo 3 - fazer aparecer o cartão anterior da lista
    - passo 4 - buscar o cartão que esta selecionado e esconder
*/
const btnVoltar = document.getElementById("btn-voltar");

btnVoltar.addEventListener("click", function () {
  //se chegar na posição 0 significa que é o primeiro
  if (cartaoAtual === 0) return;

  const cartaoSelecionado = document.querySelector(".selecionado");
  cartaoSelecionado.classList.remove("selecionado");

  //-- para diminuir/anterior/decrementar
  cartaoAtual--;

  cartoes[cartaoAtual].classList.add("selecionado");
});