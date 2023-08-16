// step 01
document.getElementById('btnSubmit').addEventListener('click', (() => {
    let emailField = document.getElementById('emailField');
    //always remember that to get the innerText of an input field use >>> .value
    let emailText = emailField.value;
    
    let userPassword = document.getElementById('userPassword');
    let passwordText = userPassword.value;

    
    //step 02 varify email and password
    //this is not the appropriate approach 
    if(emailText === 'sontan@bap.com' && passwordText === 'secret'){
        console.log('valid user');
        window.location.href = './bank.html';
    }
    else{
        alert('invalid user')
    }
}))