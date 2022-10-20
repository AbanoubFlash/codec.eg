"use strict";

var menu = document.getElementById("menu");
var actions = document.getElementById("actions");
menu.addEventListener("click", function () {
  hundlemenu();
});

function hundlemenu() {
  menu.classList.toggle("is-active");
  actions.classList.toggle("is-active");
}
//# sourceMappingURL=main.dev.js.map
