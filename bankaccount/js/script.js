var bankAccount = function(ownerName) {
    let balance = 0;
    let owner = ownerName;
    return {
        getBalance: function() {
            return balance;
        },
        getOwnerName: function() {
            return owner;
        },
        withdrawal: function(withdrawalAmount) {
            if (isNaN(parseInt(withdrawalAmount))) {
                window.alert("Enter correct withdrow amount!");
            }
            else {
                balance = parseInt(this.getBalance()) - parseInt(withdrawalAmount);
                $('userBalanceText').textContent = balance;
            }
        },
        deposit: function(depositAmount) {
            if (isNaN(parseInt(depositAmount))) {
                window.alert("Enter correct deposit amount!");
            }
            else {
                balance = parseInt(this.getBalance()) + parseInt(depositAmount);
                $('userBalanceText').textContent = balance;
            }
        }
    }
}

var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};

var bank = bankAccount(prompt('Enter user Name to start using the Bank App:'));

window.addEventListener('load', ()=>{
    "use strict";
    $('userNameText').textContent = bank.getOwnerName();
    $('name').addEventListener('click', function() {
        $('userNameText').textContent = window.prompt('Enter your name:');
    })
    $('deposit').addEventListener('click', function() {
        bank.deposit(window.prompt('Enter your deposit amount:'))
    }) ;
    $('withdrow').addEventListener('click', function() {
        bank.withdrawal(window.prompt('Enter your withdrow amount:'))
    }) ;
});
