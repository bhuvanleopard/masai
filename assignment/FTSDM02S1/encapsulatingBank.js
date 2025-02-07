function createBankAccount(init){
  let balance=init;
  return {
    deposit: function(num){ return balance+=num},
    withdraw: function(num){return balance-=num},
    getBalance: ()=>balance
  }
}

const account = createBankAccount(100);

console.log(account.deposit(50)); // Output: 150

console.log(account.withdraw(30)); // Output: 120

console.log(account.getBalance());
