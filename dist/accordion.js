/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***********************************!*\
  !*** ./src/scripts/_accordion.js ***!
  \***********************************/
const accordion = document.querySelector("[data-accordion]")

if (accordion) accordion.addEventListener("click", toggleCheckbox)

function toggleCheckbox(e) {
	e.stopPropagation()
	e.preventDefault()
	let targetAccordion = undefined
	if (e.target.matches("label.label")) {
		targetAccordion = e.target.querySelector("input")
	}
	if (e.target.matches("span")) {
		targetAccordion = e.target.parentNode.querySelector("input")
	}
	if (
		e.target.matches(".accordion__item[data-after]") &&
		!e.target.querySelector("input").checked
	) {
		targetAccordion = e.target.querySelector("input")
	}
	if (targetAccordion) {
		targetAccordion.checked = !targetAccordion.checked
	}
}

/******/ })()
;
//# sourceMappingURL=accordion.js.map