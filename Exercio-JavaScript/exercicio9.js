const mostrador = document.querySelector("#tempo");
const botaoIniciar = document.querySelector("#iniciar");
const botaoPausar = document.querySelector("#pausar");
const botaoZerar = document.querySelector("#zerar");

let segundos = 0;
let intervalo = null;

function atualizarMostrador() {
  const minutos = Math.floor(segundos / 60);
  const segundosRestantes = segundos % 60;

  mostrador.textContent =
    `${String(minutos).padStart(2, "0")}:${String(segundosRestantes).padStart(2, "0")}`;
}

botaoIniciar.addEventListener("click", function () {
  if (intervalo !== null) {
    return;
  }

  intervalo = setInterval(function () {
    segundos++;
    atualizarMostrador();
  }, 1000);
});

botaoPausar.addEventListener("click", function () {
  clearInterval(intervalo);
  intervalo = null;
});

botaoZerar.addEventListener("click", function () {
  clearInterval(intervalo);
  intervalo = null;
  segundos = 0;
  atualizarMostrador();
});
