let contador = 0;
const textoContador = document.querySelector("#contador");
const botaoAdicionar = document.querySelector("#adicionar");
const botaoZerar = document.querySelector("#zerar");

botaoAdicionar.addEventListener("click", function () {
  contador++;
  textoContador.textContent = `Cliques: ${contador}`;
});

botaoZerar.addEventListener("click", function () {
  contador = 0;
  textoContador.textContent = `Cliques: ${contador}`;
});
