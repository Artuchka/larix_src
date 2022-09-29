import "../styles/catalog.scss"
import "../pages/catalog.pug"

import { setupAccordion } from "./libs/_accordion"

import { updateSearch } from "./libs/_searchField"
import { setUpModalButtons } from "./libs/_modal"

const accordions = document.querySelectorAll("[data-accordion]")
accordions.forEach((accordion) => {
	setupAccordion(accordion)
})

setUpModalButtons(document.body)
const searchFieldResultsContainer = document.querySelector("[data-searchField]")

searchFieldResultsContainer
	.querySelector("input")
	.addEventListener("input", updateSearch)
