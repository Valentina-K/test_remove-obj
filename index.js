const element = document.querySelector(".element");

let dragging = false;

// Начальные координаты
let startX = 0;
let startY = 0;

element.addEventListener("mousedown", (e) => {
  dragging = true;

  // Получаем стиль элемента
  const style = window.getComputedStyle(element);

  // Считываем значение каждой переменной через getPropertyValue
  const translateX = parseInt(style.getPropertyValue("--x"));
  const translateY = parseInt(style.getPropertyValue("--y"));

  // Остаётся по-старому :–)
  startX = e.pageX - translateX;
  startY = e.pageY - translateY;
});

document.body.addEventListener("mousemove", (e) => {
  if (!dragging) return;
  element.style.setProperty("--x", `${e.pageX - startX}px`);
  element.style.setProperty("--y", `${e.pageY - startY}px`);
});

document.body.addEventListener("mouseup", () => (dragging = false));

function setRoundWidth() {
  const container = document.querySelector(".container");
  const newWidth =
    Math.floor(document.documentElement.clientWidth / 75) * 75 - 50 - 25;
  container.style.width = newWidth + "px";
}

setRoundWidth();
window.addEventListener("resize", setRoundWidth);
