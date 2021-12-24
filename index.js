const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function main() {
  const listaEl = document.querySelector(".lista");
  const listEl = document.querySelectorAll("li");
  for (const el of listEl) {
    el.remove();
  }
  for (const item of cosasQueAprendimos) {
    const newLiEl = document.createElement("li");
    newLiEl.textContent = item.tema;
    listaEl.appendChild(newLiEl);
  }
}

main();
