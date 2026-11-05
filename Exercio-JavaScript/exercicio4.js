const paragrafo = document.querySelector("#texto");
const botao = document.querySelector("#alternar");

botao.addEventListener("click", function () {
  paragrafo.classList.toggle("oculto");
});
