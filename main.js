const container = document.querySelector("#container");
let path;

const createGrid = (size) => {
  if (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  const grid = document.createElement("div");
  grid.classList.add("grid");
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  let number = size * size;
  for (i = 0; i < number; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    grid.appendChild(box);
  }
  container.appendChild(grid);
  path = document.querySelectorAll(".box");
  path.forEach((div) => {
    div.addEventListener("mouseover", () => {
      div.style.backgroundColor = "black";
    });
  });
};

window.onload = createGrid(16);
