let allProjects = [];
let currentFilter = "all";

async function loadProjects() {
  const res = await fetch("data/projects.json");
  allProjects = await res.json();
  renderProjects();
}

function renderProjects() {
  const container = document.getElementById("project-list");
  container.innerHTML = "";

  const filtered = allProjects.filter(p => {
    return currentFilter === "all" || p.category === currentFilter;
  });

  filtered.forEach(project => {
    const card = document.createElement("div");
    card.className = "project-card";

    card.innerHTML = `
      <h3>${project.name}</h3>
      <p>${project.description}</p>
      <small>${project.status}</small>
      <div class="project-links">
        ${project.github ? `<a href="${project.github}" target="_blank">GitHub</a>` : ""}
        ${project.live ? `<a href="${project.live}" target="_blank">Live</a>` : ""}
      </div>
    `;

    container.appendChild(card);
  });
}

document.querySelectorAll(".filters button").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filters button").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentFilter = btn.dataset.filter;
    renderProjects();
  });
});

loadProjects();
