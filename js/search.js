const searchInput = document.getElementById("project-search");

searchInput.addEventListener("input", () => {
  const term = searchInput.value.toLowerCase();

  const cards = document.querySelectorAll(".project-card");

  cards.forEach(card => {
    const text = card.innerText.toLowerCase();
    card.style.display = text.includes(term) ? "flex" : "none";
  });
});
