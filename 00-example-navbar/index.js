console.log("index.js loaded");

// 1. store the element in a variable

const menuBtnElement = document.querySelector("#menu-btn");

const menuElement = document.querySelector("#menu");

// 2. add the event listener so the button can perform actions

menuBtnElement.addEventListener("click", (event) => {
  // 3. perform actions

  menuElement.classList.toggle("not-visible");
  menuElement.classList.toggle("flex");
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 640) {
    menuElement.classList.remove("not-visible");
    menuElement.classList.add("flex");
  }
});
