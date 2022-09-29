import "../styles/index.scss"
import "../pages/index.pug"

import "./_header"
import { setupAccordion } from "./_accordion"

import { updateSearch } from "./_searchField"
import { setUpModalButtons } from "./_modal"

const accordions = document.querySelectorAll("[data-accordion]")
accordions.forEach((accordion) => {
	setupAccordion(accordion)
})

setUpModalButtons(document.body)
const searchFieldResultsContainer = document.querySelector("[data-searchField]")

searchFieldResultsContainer
	.querySelector("input")
	.addEventListener("input", updateSearch)
