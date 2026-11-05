const campo1 = document.querySelector("#numero1");
const campo2 = document.querySelector("#numero2");
const resultado = document.querySelector("#resultado");
const botoes = document.querySelectorAll("button[data-operacao]");

botoes.forEach(function (botao) {
  botao.addEventListener("click", function () {
    const numero1 = Number(campo1.value);
    const numero2 = Number(campo2.value);
    const operacao = botao.dataset.operacao;
    let valor;

    if (operacao === "+") {
      valor = numero1 + numero2;
    } else if (operacao === "-") {
      valor = numero1 - numero2;
    } else if (operacao === "*") {
      valor = numero1 * numero2;
    } else {
      if (numero2 === 0) {
        resultado.textContent = "Erro: não é possível dividir por zero.";
        return;
      }
      valor = numero1 / numero2;
    }

    resultado.textContent = `Resultado: ${valor}`;
  });
});
