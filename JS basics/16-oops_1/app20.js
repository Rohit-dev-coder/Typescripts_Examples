let account = {
    setAccount : function ( accountId, name, balance ) {
        this.accountId = accountId;
        this.name = name;
        this.balance = balance;
    },
    deposit : function ( amount ) {
        this.balance += amount;
    },
    withdraw : function ( amount ) {
        if (this.balance < amount) {
            console.log("Low balance. Transaction failed.");
            return;
        }
        this.balance -= amount;

    },
    getAccountInfo : function () { 
        console.log(`Account ID: ${this.accountId}`);
        console.log(`Name: ${this.name}`);
        console.log(`Balance: ${this.balance}`);
    }   
};


account.setAccount(101, "Alice", 5000);
account.deposit(2000);
account.withdraw(1000);
account.getAccountInfo();



