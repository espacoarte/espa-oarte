// Animação simples ao rolar a página
const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (cardTop < screenHeight - 100) {
      card.style.transform = "translateY(0)";
      card.style.opacity = "1";
    }
  });
});
function agendar() {
  const mensagem = encodeURIComponent(
    "Olá! Gostaria de agendar uma aula experimental!"
  );
  window.open(
    "https://wa.me/5514998115546?text=" + mensagem,
    "_blank"
  );
}

