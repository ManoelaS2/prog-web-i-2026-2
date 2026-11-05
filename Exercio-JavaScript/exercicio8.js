const cards = document.querySelectorAll(".card");

cards.forEach(function (card) {
  card.addEventListener("click", function () {
    cards.forEach(function (item) {
      item.classList.remove("selecionado");
    });

    card.classList.add("selecionado");
  });
});
