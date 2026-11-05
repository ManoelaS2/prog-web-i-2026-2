const campoTarefa = document.querySelector("#tarefa");
const botaoAdicionar = document.querySelector("#adicionar");
const lista = document.querySelector("#lista");
const aviso = document.querySelector("#aviso");

botaoAdicionar.addEventListener("click", function () {
  const texto = campoTarefa.value.trim();

  if (texto === "") {
    aviso.textContent = "Digite uma tarefa antes de adicionar.";
    return;
  }

  const novoItem = document.createElement("li");
  novoItem.textContent = texto;
  lista.appendChild(novoItem);

  campoTarefa.value = "";
  aviso.textContent = "";
});
