/*eslint-env browser*/
window.addEventListener('load', ()=> {
    let userName;
    let userDeposit;
    let userWithdrow;
    let nameButton = document.getElementById('name');
    nameButton.addEventListener('click', ()=>{
        userName = window.prompt('Enter your name:');
    });
    let depositButton = document.getElementById('deposit');
    depositButton.addEventListener('click', ()=>{
        userDeposit = window.prompt('Enter your deposit amount:');
    });
    let withdrowButton = document.getElementById('withdrow');
    withdrowButton.addEventListener('click', ()=>{
        userWithdrow = window.prompt('Enter your withdrow amount:');
    });
})
