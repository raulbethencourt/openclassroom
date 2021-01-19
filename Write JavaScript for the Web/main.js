// DOM ELEMENT REFERENCES
const hobbiesResult = document.getElementById("hobbies-result");
const transportResult = document.getElementById("transport-result");
const musicResult = document.getElementById("music-result");
const sports = document.getElementById("sports-checkbox");
const videoGames = document.getElementById("games-checkbox");
const music = document.getElementById("music-checkbox");

const hobbiesListener = (hobbies, children) => {
	hobbies.addEventListener("change", (evt) => {
		if (evt.target.checked) {
			hobbiesResult.children[children].classList.remove("text-secondary");
		} else {
			hobbiesResult.children[children].classList.add("text-secondary");
		}
	});
};

hobbiesListener(sports, 0);
hobbiesListener(videoGames, 1);
hobbiesListener(music, 2);

const radioButtons = document.getElementsByName("transport-method");

for (let i = 0; i < radioButtons.length; i++) {
	const button = radioButtons[i];
	button.addEventListener("change", (evt) => {
		transportResult.textContent = button.value;
	});
}

const selectOption = document.getElementById("music-preference");
musicResult.textContent = selectOption.value;

selectOption.addEventListener("change", (evt) => {
	let option = evt.target.value;
	musicResult.textContent = option;
});

// Input Validation

const PASS_INPUT = document.getElementById("password-input");
const SUBMIT_BTN = document.getElementById("submit-button");

PASS_INPUT.addEventListener("input", (evt) => {
	const PASS_LENGTH = evt.target.value.length;
	if (PASS_LENGTH >= 6 && PASS_LENGTH <= 12) {
		SUBMIT_BTN.removeAttribute("disabled");
	} else {
		SUBMIT_BTN.setAttribute("disabled", "true");
	}
});

// confirm password

const PASS_INPUT = document.getElementById("password-input");
const CONFIRM_PASS = document.getElementById("confirm-password");
const ERROR_MSG = document.getElementById("error-message");

CONFIRM_PASS.addEventListener("blur", (evt) => {
	if (PASS_INPUT.value === CONFIRM_PASS.value) {
		console.log("it works !!!");
        PASS_INPUT.style.border = "thin solid green";
        CONFIRM_PASS.style.border = "thin solid green";
        ERROR_MSG.style.display = "none";
	} else {
        console.log("doesn't work");
        PASS_INPUT.style.border = "thin solid red";
        CONFIRM_PASS.style.border = "thin solid red";
        ERROR_MSG.style.display = "block";
	}
});