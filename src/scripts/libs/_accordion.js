export function setupAccordion(accordion) {
	if (accordion) accordion.addEventListener("click", toggleCheckbox)
}

function toggleCheckbox(e) {
	e.stopPropagation()
	e.preventDefault()

	if (this.classList.contains("accordion-info")) {
		setUpInfoAccordion(e.target, this)
		return
	}

	let targetAccordion = undefined
	if (
		e.target.matches("label.label") ||
		(e.target.matches(".accordion__item[data-after]") &&
			!e.target.querySelector("input").checked)
	) {
		targetAccordion = e.target.querySelector("input")
	}
	if (e.target.matches("span")) {
		targetAccordion = e.target.parentNode.querySelector("input")
	}

	toggleAccordionItem(targetAccordion)
}

function setUpInfoAccordion(target, accordion) {
	let targetAccordion = undefined

	if (target.matches("label.label")) {
		targetAccordion = target.querySelector("input")
	}
	if (target.matches("span[data-after-unfold][data-after-fold]")) {
		targetAccordion = target.parentNode.querySelector("input")
	}

	toggleAccordionItem(targetAccordion, accordion)
}

function toggleAccordionItem(targetAccordion, accordion) {
	if (targetAccordion) {
		if (targetAccordion.checked) {
			targetAccordion.checked = false
		} else {
			uncheckAccordionInfo(accordion)
			targetAccordion.checked = true
		}
	}
}

function uncheckAccordionInfo(accordion) {
	if (!accordion) return
	Array.from(accordion.children[0].children).forEach((accItem) => {
		accItem.querySelector("label > input").checked = false
	})
}
