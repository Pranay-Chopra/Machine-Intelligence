const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");

hamburger_menu.addEventListener("click", () => {
    container.classList.toggle("active");
});

document.addEventListener('contextmenu', event => event.preventDefault());
document.addEventListener('dragstart', (e) => {
  e.preventDefault()
})

document.addEventListener('drop', (e) => {
  e.preventDefault()
})
document.addEventListener("keydown", function (event) {
    if (event.ctrlKey) {
        event.preventDefault();
    }   
});
document.addEventListener("keydown", function (event) {
  if (event.altKey) {
      event.preventDefault();
  }   
});

onselectstart = (e) => {e.preventDefault()}

