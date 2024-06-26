// Constructor function for Account objects
function Account(accountNumber, balance, owner) {
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.owner = owner;
}

// Method to deposit funds
Account.prototype.deposit = function(amount) {
    if (amount > 0) {
        this.balance += amount;
        console.log(`Deposited ${amount}. New balance is ${this.balance}.`);
    } else {
        console.log('Deposit amount must be positive.');
    }
};

// Method to withdraw funds
Account.prototype.withdraw = function(amount) {
    if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrew ${amount}. New balance is ${this.balance}.`);
    } else {
        console.log('Withdrawal amount must be positive and less than or equal to the balance.');
    }
};

// Method to calculate compound interest
Account.prototype.calculateCompoundInterest = function(rate, timesCompounded, years) {
    if (rate > 0 && timesCompounded > 0 && years > 0) {
        let compoundInterest = this.balance * Math.pow((1 + rate / timesCompounded), timesCompounded * years);
        return compoundInterest - this.balance;
    } else {
        console.log('Rate, times compounded, and years must all be positive.');
        return 0;
    }
};
