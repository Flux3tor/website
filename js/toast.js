const toast = document.getElementById("toast");
const copyBtn = document.getElementById("copy-email");

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2000);
}

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText("me@flux3tor.xyz");
  showToast("Email copied!");
});
