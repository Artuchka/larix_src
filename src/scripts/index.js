import "../styles/index.scss"

import "./_header"
import "./_accordion"

import { updateSearch } from "./_searchField"
import { setUpModalButtons } from "./_modal"

setUpModalButtons(document.body)

const searchFieldResultsContainer = document.querySelector("[data-searchField]")

searchFieldResultsContainer
	.querySelector("input")
	.addEventListener("input", updateSearch)
