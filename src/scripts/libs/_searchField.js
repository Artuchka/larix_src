const searchFieldTemplate = document.querySelector("[data-searchFieldList]")
const searchFieldItemTemplate = document.querySelector(
	"[data-searchFieldListItem]"
)
const searchFieldResultsContainer = document.querySelector("[data-searchField]")

export function updateSearch() {
	const results = [
		{
			imgSrc: "../img/products/1.png",
			title: "Террасная доска",
			price: "18500",
			size: "20*40*6000",
		},
		{
			imgSrc: "../img/products/1.png",
			title: "Террасная доска",
			price: "18500",
			size: "20*40*6000",
		},
	]
	clearItems()
	populateItems([
		...results,
		,
		{
			imgSrc: "../img/products/1.png",
			title: "Террасная доска",
			price: "18500",
			size: "20*40*6000",
		},
	])
}

function populateItems(results) {
	const resultsWrapper = searchFieldTemplate.content
		.cloneNode(true)
		.querySelector("ul")
	searchFieldResultsContainer.append(resultsWrapper)

	results.forEach((res) => {
		resultsWrapper.append(createResultItem(res))
	})
}

function clearItems() {
	const items = Array.from(
		searchFieldResultsContainer.querySelectorAll(".search-field__list")
	)
	items.forEach((item) => item.remove())
}

function createResultItem({ imgSrc, title, price, size }) {
	const resultItem = searchFieldItemTemplate.content.cloneNode(true)

	resultItem.querySelector("[data-image]").src = imgSrc
	resultItem.querySelector("[data-title]").textContent = title
	resultItem.querySelector("[data-price]").textContent = price
	resultItem.querySelector("[data-size]").textContent = size

	return resultItem
}
