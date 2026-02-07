const palette = document.getElementById("command-palette");
const input = document.getElementById("command-input");
const results = document.getElementById("command-results");

const commands = [
  {
    name: "Go to Projects",
    action: () => document.getElementById("projects").scrollIntoView()
  },
  {
    name: "Go to Now",
    action: () => document.getElementById("now").scrollIntoView()
  },
  {
    name: "Scroll to Top",
    action: () => window.scrollTo({ top: 0, behavior: "smooth" })
  },
  {
    name: "Open GitHub",
    action: () => window.open("https://github.com/Flux3tor", "_blank")
  },
  {
    name: "Copy Email",
    action: () => document.getElementById("copy-email").click()
  }
];

function openPalette() {
  palette.classList.remove("hidden");
  input.focus();
  renderCommands(commands);
}

function closePalette() {
  palette.classList.add("hidden");
  input.value = "";
}

function renderCommands(list) {
  results.innerHTML = "";
  list.forEach(cmd => {
    const li = document.createElement("li");
    li.textContent = cmd.name;
    li.onclick = () => {
      cmd.action();
      closePalette();
    };
    results.appendChild(li);
  });
}

document.addEventListener("keydown", e => {
  if (e.ctrlKey && e.key.toLowerCase() === "k") {
    e.preventDefault();
    openPalette();
  }
});

input.addEventListener("input", () => {
  const term = input.value.toLowerCase();
  const filtered = commands.filter(c => c.name.toLowerCase().includes(term));
  renderCommands(filtered);
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape") closePalette();
});
