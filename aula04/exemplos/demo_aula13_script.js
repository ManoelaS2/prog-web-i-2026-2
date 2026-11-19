// Demo Aula 13 — Funcoes

const nota1 = document.querySelector("#input-nota1");
const nota2 = document.querySelector("#input-nota2");
const nota3 = document.querySelector("#input-nota3");

const btnCalcular = document.querySelector("#btn-media");
const resultadoMedia = document.querySelector("#resultado-media");

const situacaoResultado = document.querySelector("#resultado");

function calcularMedia(nota1, nota2, nota3) {
    return ((nota1) + (nota2) + (nota3)) / 3;
}

function situacao(media){
    if(media >= 6) {
        return "Aprovado ✅";
    }

    return "Reprovado ❌";
}

btnCalcular.addEventListener("click", () => {
    const n1 = parseFloat(nota1.value);
    const n2 = parseFloat(nota2.value);
    const n3 = parseFloat(nota3.value);
    
    if(isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        resultadoMedia.textContent = "Preencha as 3 notas";
        return;
    }
    if(n1 < 0 || n1 > 10 || n2 < 0 || n2 > 10 || n3 < 0 || n3 > 10) {
        resultadoMedia.textContent = "Notas devem estar entre 0 e 10";
        return;
    }
    const media = calcularMedia(n1, n2, n3);
    console.log(media);
    resultadoMedia.textContent = "Media: " + media;
    situacaoResultado.textContent = situacao(media);
    
});
