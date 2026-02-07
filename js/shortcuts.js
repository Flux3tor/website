document.addEventListener("keydown", (e) => {
  if (e.target.tagName === "INPUT") return;

  if (e.key.toLowerCase() === "p") {
    document.getElementById("projects").scrollIntoView();
  }

  if (e.key.toLowerCase() === "t") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (e.key.toLowerCase() === "n") {
    document.getElementById("now").scrollIntoView();
  }

  if (e.key.toLowerCase() === "c") {
    document.getElementById("copy-email").click();
  }
});
