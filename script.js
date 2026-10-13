const modalOverlay = document.querySelector(".modal-overlay");
const closeButton = document.querySelector(".modal-close");
const orderButtons = document.querySelectorAll(".order-button");


const orderForm = document.querySelector(".order-form");
const submitButton = orderForm.querySelector("button");
const formNotice = document.querySelector(".form-notice");

orderButtons.forEach((button) => {
	button.addEventListener("click", () => {
		modalOverlay.classList.add("show");
	});
});

closeButton.addEventListener("click", ()=>{
	modalOverlay.classList.remove("show");
});


submitButton.addEventListener("click", function () {
	let filled = true;
	const formInput = orderForm.querySelectorAll("input");

	formInput.forEach((input) => {
		if (input.value.trim() === "") {
			filled = false;
		}
	});

	if (filled) {
		formNotice.textContent = "Pesanmu berhasil dikirim!";
		formNotice.className = "form-notice success";
	} else {
		formNotice.textContent = "Pastikan semua kolom sudah diisi.";
		formNotice.className = "form-notice error";
	}
});
