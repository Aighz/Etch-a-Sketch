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
    box.style.backgroundColor = "rgb(255, 255, 255)";
    grid.appendChild(box);
  }
  container.appendChild(grid);
  path = document.querySelectorAll(".box");
  path.forEach((div) => {
    div.addEventListener("mouseover", () => {
      let color = div.style.backgroundColor
        .slice(4, div.style.backgroundColor.length - 1)
        .split(", ");
      if (color[0] >= 85) {
        color[0] -= 85;
        color[1] -= 85;
        color[2] -= 85;
      }
      div.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
    });
  });
};

window.onload = createGrid(16);

const button = document.querySelector("#btn");
button.addEventListener("click", () => {
  let changeSize = parseInt(
    prompt("How large do you want the grid to be? (1-100)"),
    10
  );
  if (changeSize > 0 && changeSize <= 100) {
    createGrid(changeSize);
  } else {
    alert("Number not in given range!");
  }
});
