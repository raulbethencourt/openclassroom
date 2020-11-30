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
