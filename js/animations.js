const revealElements = document.querySelectorAll(".section, .hero");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.15 });

revealElements.forEach(el => {
  el.classList.add("reveal");
  observer.observe(el);
});
