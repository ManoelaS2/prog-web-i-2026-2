const botao = document.querySelector("#botaoOla");
const paragrafo = document.querySelector("#mensagem");

botao.addEventListener("click", function () {
  paragrafo.textContent = "Olá, mundo JavaScript!";
});
