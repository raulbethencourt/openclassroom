class BankAccount {
	constructor(owner, balance) {
		this.owner = owner;
		this.balance = balance;
	}

	showBalance() {
		console.log("Sold: " + this.balance + " EUR");
	}

	deposit(amount) {
		console.log("Deposé : " + amount + " EUR");
		this.balance += amount;
		this.showBalance();
	}

	withdraw(amount) {
		if (amount > this.balance) {
			console.log("you don't have enough money ");
		} else {
			console.log("Enlevé : " + amount + "EUR");
			this.balance -= amount;
			this.showBalance();
		}
	}
}

const newAccount = new BankAccount("Will Alexander", 500);

newAccount.deposit(70);
newAccount.withdraw(600);

// The statics methods can be called without instantiating the class
class BePolite {
	static sayHello() {
		console.log("Hello!");
	}
	static sayHelloTo(name) {
		console.log("Hello " + name + "!");
	}
	static add(firstNumber, secondNumber) {
		return firstNumber + secondNumber;
	}
}

BePolite.sayHello(); // imprime "Hello!""
BePolite.sayHelloTo("Will"); // imprime "Hello Will!""
const sum = BePolite.add(2, 3); // sum = 5
console.log(sum);

/**
 * Trying the test
 */
const getWordCount = (stringToTest) => {
	const wordArray = stringToTest.split(" ");
	return wordArray.length;
};

const getLetterCount = (stringToTest) => {
	const wordArray = stringToTest.split(" ");
	let totalLetters = 0;
	for (let word of wordArray) {
		word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
		totalLetters += word.length;
	}
	return totalLetters;
};

const testSimpleWordCount = () => {
	const testString = "I have four words!";
	if (getWordCount(testString) !== 4) {
		console.error("Simple getWordCount failed!");
	}
};

/**
 * Different test types
 * unitary
 * integration
 * functional
 */
const testEdgeWordCount = () => {
	const testString = "             ";
	if (getWordCount(testString) !== 0) {
		console.error("Edge getWordCount failed!");
	}
};

const testSimpleLetterCount = () => {
	const testString = "I have twenty one letters!";
	if (getLetterCount(testString) !== 21) {
		console.error("Simple getLetterCount failed!");
	}
};

const testEdgeLetterCount = () => {
	const testString = '")(&;//!!';
	if (getLetterCount(testString) !== 0) {
		console.error("Edge getLetterCount failed!");
	}
};

testSimpleWordCount();
testEdgeWordCount();

/**
 * Learn recursive functions
 *
 * @param {*} array
 * @param {*} thingToFind
 * @param {*} start
 * @param {*} end
 * @return {*}
 */
const binarySearch = (array, thingToFind, start, end) => {
	if (start > end) {
		// base case to stop the function repetition
		return false;
	}

	let mid = Math.floor((start + end) / 2);

	if (array[mid] === thingToFind) {
		return true;
	}

	if (thingToFind < array[mid]) {
		return binarySearch(array, thingToFind, start, mid - 1);
	} else {
		return binarySearch(array, thingToFind, mid + 1, end);
	}
};

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 4, 1, 7));

/**
 * Final test
 */
export class Book {
	constructor(
		title,
		author,
		description,
		pages,
		currentPage,
		read = false
	) {
		this.title = title;
		this.author = author;
		this.description = description;
		this.pages = pages;
		this.currentPage = currentPage;
		this.read = read;
	}
	readBook(page) {
		if (page < 1 || page > this.pages) {
			return 0;
		} else if (page >= 1 && page <= this.pages) {
			this.currentPage = page;
			return 1;
		} else {
			this.currentPage = page;
			this.read = true;
			return 1;
		}
	}
}

const voixFemmes = new Book(
	"voix de femmes dans le monde",
	"La restitution de plusieurs journées d'étude organisées dans le cadre du programme de recherche Genre et discriminations sexistes et homophobes (2014-2017) à l'université d'Angers devait permettre de donner une place nouvelle à des femmes d'hier et d'aujourd'hui qui, faute d'avoir pu se déclarer librement auteures, cherchèrent différentes postures et stratégies pour s'approprier le droit d'écrire.",
    452,
    5
);
const genreAutorites = new Book(
	"Écrits, genre et autorités",
	"Depuis la révolution tunisienne, le pays a attiré nombre de chercheurs, de journalistes et d’experts. Les articles et les discours médiatiques ont foisonné sur les mobilisations sociales et politiques, les résultats des élections d’octobre 2011, les démêlés avec la justice de militants et d’artistes.",
    292,
    10
);
const womenMigrations = new Book(
	"Women and Migration",
	"The essays in this book chart how women's profound and turbulent experiences of migration have been articulated in writing, photography, art and film. As a whole, the volume gives an impression of a wide range of migratory events from women's perspectives, covering the Caribbean Diaspora, refugees and slavery through the various lenses of politics and war, love and family.",
    640,
    25
);

export const books = [voixFemmes, genreAutorites, womenMigrations];

console.log(books[1].readBook(5));
