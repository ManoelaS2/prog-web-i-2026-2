const formulario = document.querySelector("#formulario");
const campoNome = document.querySelector("#nome");
const campoEmail = document.querySelector("#email");
const campoIdade = document.querySelector("#idade");
const erroNome = document.querySelector("#erroNome");
const erroEmail = document.querySelector("#erroEmail");
const erroIdade = document.querySelector("#erroIdade");
const sucesso = document.querySelector("#sucesso");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  let formularioValido = true;

  if (campoNome.value.trim().length < 3) {
    campoNome.classList.add("erro");
    erroNome.textContent = "O nome deve ter pelo menos 3 caracteres.";
    formularioValido = false;
  } else {
    campoNome.classList.remove("erro");
    erroNome.textContent = "";
  }

  if (!campoEmail.value.includes("@")) {
    campoEmail.classList.add("erro");
    erroEmail.textContent = "Digite um e-mail válido que contenha @.";
    formularioValido = false;
  } else {
    campoEmail.classList.remove("erro");
    erroEmail.textContent = "";
  }

  const idade = Number(campoIdade.value);
  if (campoIdade.value.trim() === "" || idade < 18 || idade > 120) {
    campoIdade.classList.add("erro");
    erroIdade.textContent = "A idade deve ser um número entre 18 e 120.";
    formularioValido = false;
  } else {
    campoIdade.classList.remove("erro");
    erroIdade.textContent = "";
  }

  if (formularioValido) {
    sucesso.textContent = "Formulário enviado com sucesso!";
    formulario.reset();
    campoNome.classList.remove("erro");
    campoEmail.classList.remove("erro");
    campoIdade.classList.remove("erro");
  } else {
    sucesso.textContent = "";
  }
});
