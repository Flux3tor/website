console.log("👀 curious dev, huh?");
console.log("Try Ctrl + K");

const logo = document.querySelector(".logo");
let clicks = 0;

logo.addEventListener("click", () => {
  clicks++;
  if (clicks === 5) {
    alert("Dev mode unlocked.");
    clicks = 0;
  }
});
