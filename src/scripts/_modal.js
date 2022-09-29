const modalEl = document.querySelector("[data-modal]")
const modalBgEl = document.querySelector("[data-modal-bg]")

if (!modalEl) {
	console.log(modalEl)
}

const closeModalBtn = modalEl.querySelector("[data-close-modal-btn]")
const form = modalEl.querySelector("form.form")
const successNotification = document.querySelector("[data-notification]")

closeModalBtn.addEventListener("click", closeModal)
form.addEventListener("submit", successModal)

export function setUpModalButtons(documentElement) {
	const modalButtons = Array.from(
		documentElement.querySelectorAll("[data-modal-open-btn]")
	)

	modalButtons.forEach((btn) => btn.addEventListener("click", openModal))
}

function openModal() {
	modalEl.classList.add("show")
	modalBgEl.classList.add("show")
}
function closeModal() {
	modalEl.classList.remove("show")
	modalBgEl.classList.remove("show")
}

function successModal() {
	event.preventDefault()
	closeModal()
	successNotification.classList.add("show")
	console.log("before")
	setTimeout(() => {
		console.log("in")
		successNotification.classList.remove("show")
	}, 3000)
}
