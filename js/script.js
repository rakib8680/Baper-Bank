// step 1
// add eventHandler in submit button 

document.getElementById('submit-btn').addEventListener('click', function () {


    // step-2 : get email and password from input field
    const email = document.getElementById('email');
    const emailValue = email.value;            /*  always use   .value    to get values from input field*/


    const passwordField = document.getElementById('password');
    const password = passwordField.value;            /*  always use   .value    to get values from input field*/

    // Danger!!!!! Never verify email and pass in future with the below process . Only for learning purpose.
    // step-2 verify email and password 
    if (emailValue == 'rakib@gmail.com' && password == 'Rakib1001') {

        // step - 3 :  go to bank site 
        window.location.href = 'bank.html';
    }
    
    else {
        alert('invalid username or password');
    }




})