const luzes = document.querySelectorAll(".luz");
const botaoProximo = document.querySelector("#proximo");
let indiceAtual = 0;

botaoProximo.addEventListener("click", function () {
  luzes[indiceAtual].classList.remove("acesa");
  indiceAtual = (indiceAtual + 1) % luzes.length;
  luzes[indiceAtual].classList.add("acesa");
});
