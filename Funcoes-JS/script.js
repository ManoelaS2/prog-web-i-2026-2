// ===================== Q01 =====================
function saudar(nome) {
  return `Olá, ${nome}!`;
}

console.log("--- Q01 ---");
console.log(saudar("Ana"));
console.log(saudar("Manoela"));
console.log(saudar("Lucia"));


// ===================== Q02 =====================
const saudarArrow = nome => `Olá, ${nome}!`;

console.log("--- Q02 ---");
console.log(saudarArrow("Maria"));


// ===================== Q03 =====================
function calcularMedia(a, b, c) {
  return (a + b + c) / 3;
}

console.log("--- Q03 ---");
console.log(calcularMedia(10, 8, 6));   // 8
console.log(calcularMedia(7, 7, 7));    // 7
console.log(calcularMedia(5, 9.5, 10)); // 8.166...


// ===================== Q04 =====================
const frutas = ['Maçã', 'Banana', 'Laranja', 'Uva', 'Manga'];

frutas.push('Abacaxi');          // adiciona a sexta fruta
const removida = frutas.pop();   // remove a última (Abacaxi)

console.log("--- Q04 ---");
console.log("Fruta removida:", removida);
console.log("Array final:", frutas);


// ===================== Q05 =====================
const temperaturas = [8, 22, 35, 14, 28, 40, 17];

console.log("--- Q05 ---");
temperaturas.forEach(temp => {
  if (temp < 15) {
    console.log(`${temp}°C → Frio`);
  } else if (temp <= 30) {
    console.log(`${temp}°C → Ok`);
  } else {
    console.log(`${temp}°C → Calor`);
  }
});


// ===================== Q06 =====================
const precos = [25.90, 48.00, 13.50, 99.90, 7.80];
const precosReajustados = precos.map(preco => Number((preco * 1.15).toFixed(2)));

console.log("--- Q06 ---");
console.log("Preços originais:", precos);
console.log("Preços reajustados (+15%):", precosReajustados);


// ===================== Q07 =====================
const estoque = [
  { nome: 'Milho', qtd: 50 },
  { nome: 'Soja', qtd: 0 },
  { nome: 'Café', qtd: 12 },
  { nome: 'Feijão', qtd: 0 },
  { nome: 'Arroz', qtd: 30 },
];

const emEstoque = estoque.filter(item => item.qtd > 0);

console.log("--- Q07 ---");
console.log(emEstoque);


// ===================== Q08 =====================
const catalogo = [
  { nome: 'Milho', ativo: true },
  { nome: 'Soja', ativo: false },
  { nome: 'Café', ativo: true },
  { nome: 'Trigo', ativo: false },
];

const nomesAtivos = catalogo
  .filter(produto => produto.ativo)
  .map(produto => produto.nome.toUpperCase());

console.log("--- Q08 ---");
console.log(nomesAtivos); // ['MILHO', 'CAFÉ']


// ===================== Q09 =====================
function renderizarLista(array, seletorUl) {
  const ul = document.querySelector(seletorUl);
  ul.innerHTML = ""; // limpa antes para não duplicar itens

  array.forEach(texto => {
    const li = document.createElement("li");
    li.textContent = texto;
    ul.appendChild(li);
  });
}

// Testando com dois <ul> diferentes
renderizarLista(['Maçã', 'Banana', 'Uva'], "#lista-frutas");
renderizarLista(['Ceres', 'Goiânia', 'Anápolis', 'Rialma'], "#lista-cidades");
