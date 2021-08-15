document.getElementById('submit-btn').addEventListener('click', function () {

    // variables of input fileds
    const inputEmail = document.getElementById('input-email');
    const userEmail = inputEmail.value;
    const userpassword = document.getElementById('password');
    const getUserPass = userpassword.value;



    // condition
    if (userEmail == 'sontan@baap.com' && getUserPass == 'sontanbapp') {
        window.location.href = 'bank.html';
        // console.log('valid user');

    }
})