$(document).ready(function () {
	$("#cuurent-year").text(new Date().getFullYear())

	$("[data-scroll]").on("click", function (event) {
		event.preventDefault()

		let $this = $(this),
			blockId = $this.data("scroll"),
			blockOffset = $(blockId).offset().top

		$("html, body").animate(
			{
				scrollTop: blockOffset - 50,
			},
			500
		)
	})

	const popup = document.querySelector(".popup")
	const popupOpen = [...document.querySelectorAll(".popup-open")]
	const popupClose = document.querySelector(".popup__close")

	popupOpen.forEach(item => {
		item.addEventListener("click", e => {
			e.preventDefault()
			popup.classList.add("show")
		})
	})

	popupClose.addEventListener("click", () => {
		popup.classList.remove("show")
	})

	const TOKEN = "6098437667:AAEl37U3LJyzcGV9dQAxVVkDM3txUuN_ifA"
	const CHAT_ID = "-1001895141557"
	const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`

	document
		.querySelector(".popup__content")
		.addEventListener("submit", function (e) {
			e.preventDefault()
			document.querySelector(".popup__btn").setAttribute("disabled", "disabled")

			let message = "<b>Заявка</b>\n"
			message += `<b>Имя: </b>${this.name.value}\n`
			message += `<b>Почта: </b>${this.email.value}\n`
			message += `<b>Ник Телеграм: </b>${this.telegram.value}\n`
			message += `<b>Телефон: </b>${this.phone.value}\n`
			message += `<b>Откуда узнали: </b>${this.info.value}\n`

			axios.post(URL_API, {
				chat_id: CHAT_ID,
				parse_mode: "html",
				text: message,
			})

			setTimeout(() => {
				window.location.href = "thankyou.html"
			}, 1500)
		})
})
