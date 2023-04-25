const darkModeClass = "dark-mode";
const lua = document.querySelector("#lua");
const sol = document.querySelector("#sol");
const first = document.querySelector(".first-side");
const second = document.querySelector(".second-side");
const button = document.querySelector("button");
const button2 = document.querySelector("#second-btn");
const fh1 = document.querySelector("#first-h1");
const sh1 = document.querySelector("#second-h1");
const p1 = document.querySelector("#p1");
const p2 = document.querySelector("#p2");
const p3 = document.querySelector("#p3");
const p4 = document.querySelector("#rangeValue");
const h3 = document.querySelector("#h33");

function changeMode() {
  changeClasses();
}

function changeClasses() {
  lua.classList.toggle(darkModeClass);
  sol.classList.toggle(darkModeClass);
  first.classList.toggle(darkModeClass);
  second.classList.toggle(darkModeClass);
  button.classList.toggle(darkModeClass);
  fh1.classList.toggle(darkModeClass);
  sh1.classList.toggle(darkModeClass);
  p1.classList.toggle(darkModeClass);
  p2.classList.toggle(darkModeClass);
  button2.classList.toggle(darkModeClass);
  p3.classList.toggle(darkModeClass);
  h3.classList.toggle(darkModeClass);
  p4.classList.toggle(darkModeClass);
}

lua.addEventListener("click", changeMode);
sol.addEventListener("click", changeClasses);










