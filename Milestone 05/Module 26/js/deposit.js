//>>>>>>>>Deposite calc<<<<<<
// step 01 get the button
document.getElementById('btnDeposit').addEventListener('click', (() => {
    //deposit input calc
    let depositField = document.getElementById('depositField');
    let depositAmount = depositField.value;
    depositAmount = Number.parseFloat(depositAmount);

    if (depositAmount) {
        //Showing deposit amount
        let showDeposit = document.getElementById('showDeposit');
        let showAmount = showDeposit.innerText;
        showAmount = Number.parseFloat(showAmount);
        showDeposit.innerText = showAmount + depositAmount;

        //totalAmount calc
        let totalAmount = document.getElementById('totalAmount');
        let totalNumberAmount = totalAmount.innerText;
        totalNumberAmount = Number.parseFloat(totalNumberAmount);

        totalAmount.innerText = totalNumberAmount + depositAmount;

        //clearing the input field
        depositField.value = ''
    }
    else {
        alert('Koto !')
    }
}))



// >>>>>>>Withdraw calc<<<<<<<<<
document.getElementById('btnWithdraw').addEventListener('click', (() => {
    //withdraw field calc
    let withdrawField = document.getElementById('withdrawAmount');
    let withdrawAmount = withdrawField.value;
    withdrawAmount = Number.parseFloat(withdrawAmount);


    if (withdrawAmount) {
        // showWithdraw calc
        let showWithdraw = document.getElementById('showWithdraw');
        let showWithdrawAmount = showWithdraw.innerText;
        showWithdrawAmount = Number.parseFloat(showWithdrawAmount);

        //total Amount calc
        let totalAmount = document.getElementById('totalAmount');
        let totalNumberAmount = totalAmount.innerText;
        totalNumberAmount = Number.parseFloat(totalNumberAmount);
        withdrawField.value = '';

        if (withdrawAmount <= totalNumberAmount) {
            showWithdraw.innerText = showWithdrawAmount + withdrawAmount;
            totalAmount.innerText = totalNumberAmount - withdrawAmount;
        }
        else {
            alert('Deba re deba , Baap ko loot liya!!!!')
        }

    }
    else {
        alert('Koto Lagbo?')
    }
}))