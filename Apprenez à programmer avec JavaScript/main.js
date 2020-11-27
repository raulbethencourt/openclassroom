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