/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************************!*\
  !*** ./src/scripts/_header.js ***!
  \********************************/
const openNavButton = document.querySelector("[data-nav-open]")
const closeNavButton = document.querySelector("[data-nav-close]")

const nav = document.querySelector("[data-nav]")

openNavButton.addEventListener("click", openNav)
closeNavButton.addEventListener("click", closeNav)

function closeNav() {
	nav.classList.remove("show")
}

function openNav() {
	nav.classList.add("show")
}

/******/ })()
;
//# sourceMappingURL=header.js.map