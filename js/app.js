document.getElementById("year").textContent =
  new Date().toLocaleDateString();

const progressBar = document.getElementById("scroll-progress");

window.addEventListener("scroll", () => {
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = (window.scrollY / scrollHeight) * 100;
  progressBar.style.width = scrolled + "%";
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").catch(() => {});
}

console.log(
  "%cFlux3tor Portfolio",
  "font-size:16px;font-weight:bold;"
);
console.log("Built with intention.");
