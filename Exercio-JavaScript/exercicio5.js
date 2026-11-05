const campoNumero = document.querySelector("#numero");
const botaoVerificar = document.querySelector("#verificar");
const resultado = document.querySelector("#resultado");

botaoVerificar.addEventListener("click", function () {
  if (campoNumero.value.trim() === "") {
    resultado.textContent = "Digite um número primeiro.";
    return;
  }

  const numero = Number(campoNumero.value);

  if (!Number.isInteger(numero)) {
    resultado.textContent = "Digite um número inteiro válido.";
  } else if (numero % 2 === 0) {
    resultado.textContent = "Número par";
  } else {
    resultado.textContent = "Número ímpar";
  }
});
