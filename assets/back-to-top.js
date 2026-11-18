const backToTopButton = document.querySelector(".back-to-top");

function toggleBackToTopButton() {
  backToTopButton.classList.toggle("is-visible", window.scrollY > 240);
}

window.addEventListener("scroll", toggleBackToTopButton, { passive: true });
toggleBackToTopButton();
